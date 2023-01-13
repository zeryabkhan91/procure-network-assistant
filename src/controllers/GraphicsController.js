const { cpuCurrentSpeed } = require("systeminformation");
const BiosModel = require("../models/BiosModel");
const DisplayModel = require("../models/DisplayModel");
const GraphicsModel = require("../models/GraphicsModel");
const MotherBoardModel = require("../models/MotherBoardModel");

const UpdateGraphics = async (userId, systemInformation) => {
  const graphics = systemInformation.graphics.controllers[0];
  try {
    const query = { user: userId };
    const update = { $set: { ...graphics, user: userId } };
    const options = { upsert: true };
    const response = await GraphicsModel.updateOne(query, update, options);
    console.log("Update Graphics response is ", response);
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { UpdateGraphics };
