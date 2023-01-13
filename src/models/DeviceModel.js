var mongoose = require("mongoose");

var Device = new mongoose.Schema(
  {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: false },
    mac: { type: String, required: false },
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

Device.virtual("fullName").get(function () {
  return this.firstName + " " + this.lastName;
});

module.exports = mongoose.model("devices", Device);
