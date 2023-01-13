var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var SystemSchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: "User", required: true },
    manufacturer: { type: String, required: true },
    model: { type: String, required: true },
    version: { type: String, required: false },
    serial: { type: String, required: false },
    uuid: { type: String, required: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("System", SystemSchema);
