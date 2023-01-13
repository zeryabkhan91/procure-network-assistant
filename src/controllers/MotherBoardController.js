const BiosModel = require("../models/BiosModel");
const MotherBoardModel = require("../models/MotherBoardModel");

const UpdateMotherBoard = async (userId, systemInformation) => {
  const motherBoard = systemInformation.baseboard;
  try {
    const query = { user: userId };
    const update = { $set: { ...motherBoard, user: userId } };
    const options = { upsert: true };
    const response = await MotherBoardModel.updateOne(query, update, options);
    console.log("motherboard response is ", response);
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { UpdateMotherBoard };
