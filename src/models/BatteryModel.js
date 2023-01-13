var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BatterySchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: "User", required: true },
    hasBattery: { type: String, required: true },
    charging: { type: String, required: true },
    percentage: { type: String, required: true },
    timeRemaining: { type: String, required: true },
    maxCapacity: { type: String, required: true },
    currentCapacity: { type: String, required: true },
    voltage: { type: String, required: true },
    acConnected: { type: String, required: true },
    type: { type: String, required: true },
    model: { type: String, required: true },
    manufacturer: { type: String, required: true },
    serial: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Batteries", BatterySchema);
