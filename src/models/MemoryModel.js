var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MemorySchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: "User", required: true },
    total: { type: String, required: true },
    free: { type: String, required: true },
    used: { type: String, required: true },
    active: { type: String, required: true },
    available: { type: String, required: true },
    total: { type: String, required: true },
    free: { type: String, required: true },
    used: { type: String, required: true },
    active: { type: String, required: true },
    available: { type: String, required: true },
    buffers: { type: String, required: true },
    cached: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("memories", MemorySchema);
