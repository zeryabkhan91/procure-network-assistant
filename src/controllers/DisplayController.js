const { cpuCurrentSpeed } = require("systeminformation");
const BiosModel = require("../models/BiosModel");
const DisplayModel = require("../models/DisplayModel");
const MotherBoardModel = require("../models/MotherBoardModel");

const UpdateDisplay = async (userId, systemInformation) => {
  const display = systemInformation.graphics.displays[0];
  try {
    const query = { user: userId };
    const update = { $set: { ...display, user: userId } };
    const options = { upsert: true };
    const response = await DisplayModel.updateOne(query, update, options);
    console.log("Update Display response is ", response);
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { UpdateDisplay };
