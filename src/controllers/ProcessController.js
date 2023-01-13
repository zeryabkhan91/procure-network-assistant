const { cpuCurrentSpeed } = require("systeminformation");
const BiosModel = require("../models/BiosModel");
const CpuModel = require("../models/CpuModel");
const MotherBoardModel = require("../models/MotherBoardModel");
const ProcessModel = require("../models/ProcessModel");

const UpdateProcess = async (userId, systemInformation) => {
  const processes = systemInformation.processes;
  try {
    const query = { user: userId };
    const update = { $set: { ...processes, user: userId } };
    const options = { upsert: true };
    const response = await ProcessModel.updateOne(query, update, options);
    console.log("Update processes response is ", response);
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { UpdateProcess };
