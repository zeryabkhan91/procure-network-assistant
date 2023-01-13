var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var DisplaySchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: "User", required: true },
    currentResX: { type: String, required: true },
    currentResY: { type: String, required: true },
    currentRefreshRate: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Display", DisplaySchema);
