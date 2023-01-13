const MemoryModel = require("../models/MemoryModel");

const UpdateMemory = async (userId, systemInformation) => {
  const memory = systemInformation.mem;
  try {
    const query = { user: userId };
    const update = { $set: { ...memory, user: userId } };
    const options = { upsert: true };
    const response = await MemoryModel.updateOne(query, update, options);
    console.log("Update memory response is ", response);
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { UpdateMemory };
