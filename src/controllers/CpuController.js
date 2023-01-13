const CpuModel = require("../models/CpuModel");

const UpdateCpu = async (userId, systemInformation) => {
  const cpu = systemInformation.cpu;
  try {
    const query = { user: userId };
    const update = { $set: { ...cpu, user: userId } };
    const options = { upsert: true };
    const response = await CpuModel.updateOne(query, update, options);
    console.log("Update CPU response is ", response);
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { UpdateCpu };
