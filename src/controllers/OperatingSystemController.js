const OperatingSystemModel = require("../models/OperatingSystemModel");

const UpdateOperatingSystem = async (userId, systemInformation) => {
  const os = systemInformation.os;
  try {
    const query = { user: userId };
    const update = { $set: { ...os, user: userId } };
    const options = { upsert: true };
    const response = await OperatingSystemModel.updateOne(
      query,
      update,
      options
    );
    console.log("Update Operating System response is ", response);
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { UpdateOperatingSystem };
