var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CpuSchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: "User", required: true },
    manufacturer: { type: String, required: true },
    brand: { type: String, required: true },
    speed: { type: String, required: true },
    cores: { type: String, required: true },
    processors: { type: String, required: true },
    virtualization: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cpu", CpuSchema);
