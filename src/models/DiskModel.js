var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var DiskSchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: "User", required: true },
    fs: { type: String, required: true },
    type: { type: String, required: true },
    size: { type: String, required: true },
    used: { type: String, required: true },
    available: { type: String, required: true },
    rw: { type: String, required: true },
    index: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Disks", DiskSchema);
