var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var GraphicsSchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: "User", required: true },
    vendor: { type: String, required: true },
    model: { type: String, required: true },
    bus: { type: String, required: true },
    vram: { type: String, required: true },
    vramDynamic: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Graphics", GraphicsSchema);
