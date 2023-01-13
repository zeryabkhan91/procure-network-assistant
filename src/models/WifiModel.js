var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var WifiSchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: "User", required: true },
    ssid: { type: String, required: true },
    bssid: { type: String, required: true },
    mode: { type: String, required: true },
    channel: { type: String, required: true },
    frequency: { type: String, required: true },
    signalLevel: { type: String, required: true },
    index: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Wifi", WifiSchema);
