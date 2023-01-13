var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var OperatingSystemSchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: "User", required: true },
    platform: { type: String, required: true },
    hostname: { type: String, required: true },
    distro: { type: String, required: true },
    release: { type: String, required: true },
    codeName: { type: String, required: true },
    kernal: { type: String, required: true },
    architecture: { type: String, required: true },
    serial: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("OperatingSystem", OperatingSystemSchema);
