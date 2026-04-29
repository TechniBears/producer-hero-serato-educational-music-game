#!/usr/bin/env node

const HID = require("node-hid");

const args = new Set(process.argv.slice(2));
const secondsArg = process.argv.find((arg) => arg.startsWith("--seconds="));
const seconds = secondsArg ? Number(secondsArg.split("=")[1]) : 30;
const deviceNameArg = process.argv.find((arg) => arg.startsWith("--device="));
const deviceName = deviceNameArg ? deviceNameArg.slice("--device=".length) : process.env.HID_DEVICE_NAME || "SLAB";

function usageName(device) {
  if (device.usagePage == null || device.usage == null) return "HID interface";
  return "HID control interface";
}

function signed8(byte) {
  return byte > 127 ? byte - 256 : byte;
}

function summarize(device, index) {
  const summary = {
    index,
    product: device.product,
    manufacturer: device.manufacturer,
    usage: usageName(device),
    interface: device.interface,
  };
  if (args.has("--verbose")) {
    summary.usagePage = device.usagePage;
    summary.usageId = device.usage;
  }
  if (args.has("--show-path")) summary.path = device.path;
  return summary;
}

const devicePattern = new RegExp(deviceName, "i");
const devices = HID.devices().filter((device) =>
  devicePattern.test(`${device.product || ""} ${device.manufacturer || ""}`),
);

if (devices.length === 0) {
  console.error(`No HID devices found matching "${deviceName}". Try npm run hid:list -- --device=<name>.`);
  process.exit(1);
}

if (args.has("--list")) {
  console.table(devices.map(summarize));
  process.exit(0);
}

const selectedIndexArg = process.argv.find((arg) => arg.startsWith("--index="));
const selectedIndex = selectedIndexArg ? Number(selectedIndexArg.split("=")[1]) : null;
const pathArg = process.argv.find((arg) => arg.startsWith("--path="));
const selectedPath = pathArg ? pathArg.slice("--path=".length) : null;
const selected =
  selectedPath != null
    ? devices.find((device) => device.path === selectedPath)
    : selectedIndex != null
      ? devices[selectedIndex]
      : devices[0];

if (!selected) {
  console.error("No matching HID device. Run npm run hid:list first.");
  process.exit(1);
}

console.log("Opening:", summarize(selected, devices.indexOf(selected)));
console.log(`Listening for ${seconds}s. Press pads/buttons, turn encoders, move controls.`);

const device = new HID.HID(selected.path);
let events = 0;

device.on("data", (data) => {
  events += 1;
  const bytes = [...data];
  const hex = bytes.map((byte) => byte.toString(16).padStart(2, "0")).join(" ");

  if (bytes.length >= 4) {
    const buttons = bytes[0] & 0b111;
    const x = signed8(bytes[1]);
    const y = signed8(bytes[2]);
    const wheel = signed8(bytes[3]);
    console.log(
      `${events.toString().padStart(4, "0")} pointer buttons=${buttons} x=${x} y=${y} wheel=${wheel} raw=${hex}`,
    );
    return;
  }

  console.log(`${events.toString().padStart(4, "0")} raw=${hex}`);
});

device.on("error", (error) => {
  console.error("HID error:", error.message);
});

setTimeout(() => {
  console.log(`Done. Captured ${events} event(s).`);
  device.close();
  process.exit(0);
}, seconds * 1000);
