var mongoose = require("mongoose");

var Asset = new mongoose.Schema(
  {
    userName: { type: String, required: true },
    email: { type: String, required: true },
    mac: { type: String, required: true },
    ip: { type: String, required: true },
    battery: Object,
    system: Object,
    bios: Object,
    motherboard: Object,
    cpu: Object,
    display: Object,
    graphics: Object,
    network: Object,
    disk: Object,
    memory: Object,
    os: Object,
    port: Object,
    process: Object,
    storage: Object,
    wifi: Object,
  },
  { timestamps: true }
);

module.exports = mongoose.model("assets", Asset);
