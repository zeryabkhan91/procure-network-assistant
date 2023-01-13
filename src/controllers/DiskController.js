const DiskModel = require("../models/DiskModel");

const UpdateDisk = async (userId, systemInformation) => {
  const fileSystems = systemInformation.fsSize;
  fileSystems.forEach(async (fileSystem, index) => {
    try {
      const query = { user: userId, index: index };
      const update = { $set: { ...fileSystem, user: userId, index: index } };
      const options = { upsert: true };
      const response = await DiskModel.updateOne(query, update, options);
      console.log("Update fileSystem ", index, " response is ", response);
    } catch (error) {
      console.log(error);
      return error;
    }
  });
};

module.exports = { UpdateDisk };
