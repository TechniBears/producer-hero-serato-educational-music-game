#!/usr/bin/env node

const midi = require("midi");

const args = new Set(process.argv.slice(2));
const secondsArg = process.argv.find((arg) => arg.startsWith("--seconds="));
const seconds = secondsArg ? Number(secondsArg.split("=")[1]) : 30;
const deviceNameArg = process.argv.find((arg) => arg.startsWith("--device="));
const deviceName = deviceNameArg ? deviceNameArg.slice("--device=".length) : process.env.MIDI_DEVICE_NAME || "SLAB";

function statusName(status) {
  const type = status & 0xf0;
  const channel = (status & 0x0f) + 1;
  if (type === 0x80) return `note-off ch=${channel}`;
  if (type === 0x90) return `note-on ch=${channel}`;
  if (type === 0xa0) return `aftertouch ch=${channel}`;
  if (type === 0xb0) return `cc ch=${channel}`;
  if (type === 0xe0) return `pitch-bend ch=${channel}`;
  return `status=0x${status.toString(16)}`;
}

function listPorts() {
  const input = new midi.Input();
  const ports = [];
  for (let index = 0; index < input.getPortCount(); index += 1) {
    ports.push({ index, name: input.getPortName(index) });
  }
  input.closePort();
  return ports;
}

const ports = listPorts();

if (args.has("--list")) {
  console.table(ports);
  process.exit(0);
}

const indexArg = process.argv.find((arg) => arg.startsWith("--index="));
const index =
  indexArg != null
    ? Number(indexArg.split("=")[1])
    : ports.find((port) => new RegExp(deviceName, "i").test(port.name))?.index ?? 0;

if (!ports[index]) {
  console.error("No MIDI input port found. Run npm run midi:list first.");
  process.exit(1);
}

const input = new midi.Input();
input.ignoreTypes(false, false, false);
input.on("message", (deltaTime, message) => {
  const [status = 0, data1 = 0, data2 = 0] = message;
  const hex = message.map((byte) => byte.toString(16).padStart(2, "0")).join(" ");
  console.log(
    `${deltaTime.toFixed(6)}s ${statusName(status)} data1=${data1} data2=${data2} raw=${hex}`,
  );
});

console.log(`Opening MIDI input ${index}: ${ports[index].name}`);
console.log(`Listening for ${seconds}s. Press pads/buttons, turn encoders, move the strip/dial.`);
input.openPort(index);

setTimeout(() => {
  input.closePort();
  console.log("Done.");
  process.exit(0);
}, seconds * 1000);
