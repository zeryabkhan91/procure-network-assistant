var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var BiosSchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: "User", required: true },
    vendor: { type: String, required: true },
    version: { type: String, required: true },
    releaseDate: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Bios", BiosSchema);
