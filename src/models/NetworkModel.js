var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var NetworkSchema = new Schema(
  {
    user: { type: Schema.ObjectId, ref: "User", required: true },
    iface: { type: String, required: true },
    ifaceName: { type: String, required: true },
    default: { type: String, required: true },
    ip4: { type: String, required: true },
    ip4subnet: { type: String, required: true },
    ip6: { type: String, required: true },
    ip6subnet: { type: String, required: true },
    mac: { type: String, required: true },
    internal: { type: String, required: true },
    virtual: { type: String, required: true },
    type: { type: String, required: true },
    mtu: { type: String, required: true },
    speed: { type: String, required: true },
    dhcp: { type: String, required: true },
    index: { type: Number, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Network", NetworkSchema);
