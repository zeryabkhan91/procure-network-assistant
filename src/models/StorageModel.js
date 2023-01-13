var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var StorageSchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: "User", required: true },
    size: { type: String, required: true },
    device: { type: String, required: true },
    type: { type: String, required: true },
    name: { type: String, required: true },
    vendor: { type: String, required: true },
    serialNumber: { type: String, required: true },
    interfaceType: { type: String, required: true },
    index: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Storage", StorageSchema);
