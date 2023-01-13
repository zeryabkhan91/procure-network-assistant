var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ProcessSchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: "User", required: true },
    all: { type: String, required: true },
    running: { type: String, required: true },
    blocked: { type: String, required: true },
    sleeping: { type: String, required: true },
    unknown: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Processes", ProcessSchema);
