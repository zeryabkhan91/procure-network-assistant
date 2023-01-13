const mongoose = require("mongoose");

const processDetailsSchema = mongoose.Schema({
  pid: { type: String, required: true },
  parent_pid: { type: String, required: true },
  name: { type: String, required: true },
  cpu: { type: String, required: true },
  priority: { type: String, required: true },
  started: { type: String, required: true },
  state: { type: String, required: true },
  user: { type: String, required: true },
});
