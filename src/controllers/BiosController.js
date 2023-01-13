const BiosModel = require("../models/BiosModel");

const UpdateBios = async (userId, systemInformation) => {
  const bios = systemInformation.bios;
  try {
    const query = { user: userId };
    const update = { $set: { ...bios, user: userId } };
    const options = { upsert: true };
    const response = await BiosModel.updateOne(query, update, options);
    console.log("bios response is ", response);
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { UpdateBios };
