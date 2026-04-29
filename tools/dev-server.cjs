#!/usr/bin/env node

const http = require("node:http");
const midi = require("midi");
const { WebSocketServer } = require("ws");

const HOST = "127.0.0.1";
const PORT = Number(process.env.PORT || 5173);
const MIDI_DEVICE_NAME = process.env.MIDI_DEVICE_NAME || "SLAB";

let midiInput = null;
let midiPortName = null;

function listMidiPorts() {
  const input = new midi.Input();
  const ports = [];
  for (let index = 0; index < input.getPortCount(); index += 1) {
    ports.push({ index, name: input.getPortName(index) });
  }
  input.closePort();
  return ports;
}

async function main() {
  const { createServer } = await import("vite");
  const vite = await createServer({
    server: { middlewareMode: true, host: HOST },
    appType: "spa",
  });

  const server = http.createServer((req, res) => {
    vite.middlewares(req, res);
  });

  const wss = new WebSocketServer({ noServer: true });

  server.on("upgrade", (req, socket, head) => {
    if (req.url !== "/controller-midi" && req.url !== "/slab-midi") {
      socket.destroy();
      return;
    }
    wss.handleUpgrade(req, socket, head, (ws) => {
      wss.emit("connection", ws, req);
    });
  });

  function broadcast(payload) {
    const data = JSON.stringify(payload);
    for (const client of wss.clients) {
      if (client.readyState === client.OPEN) client.send(data);
    }
  }

  function openPreferredMidiPort() {
    const ports = listMidiPorts();
    const preferred = ports.find((port) => new RegExp(MIDI_DEVICE_NAME, "i").test(port.name)) || ports[0];
    if (!preferred) return;

    midiInput = new midi.Input();
    midiInput.ignoreTypes(false, false, false);
    midiInput.on("message", (delta, message) => {
      broadcast({ type: "midi", delta, message, source: midiPortName });
    });
    midiInput.openPort(preferred.index);
    midiPortName = preferred.name;
  }

  try {
    openPreferredMidiPort();
  } catch (error) {
    console.warn(`MIDI bridge could not open: ${error.message}`);
  }

  wss.on("connection", (ws) => {
    ws.send(
      JSON.stringify({
        type: "hello",
        bridge: true,
        midiPortName,
        ports: listMidiPorts(),
      }),
    );
  });

  server.listen(PORT, HOST, () => {
    console.log(`Producer Hero: http://${HOST}:${PORT}/`);
    console.log(midiPortName ? `MIDI bridge: ${midiPortName}` : "MIDI bridge: no input found");
  });

  process.on("SIGINT", () => {
    if (midiInput) midiInput.closePort();
    server.close(() => process.exit(0));
  });
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
