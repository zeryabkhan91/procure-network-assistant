var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var PortSchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: "User", required: true },
    protocol: { type: String, required: true },
    localAddress: { type: String, required: true },
    localPort: { type: String, required: true },
    state: { type: String, required: true },
    pid: { type: String, required: true },
    process: { type: String, required: true },
    index: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Ports", PortSchema);
