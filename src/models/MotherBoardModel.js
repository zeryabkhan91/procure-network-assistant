var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var MotherBoardSchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: "User", required: true },
    manufacturer: { type: String, required: true },
    model: { type: String, required: true },
    version: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("MotherBoard", MotherBoardSchema);
