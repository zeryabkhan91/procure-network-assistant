const StorageModel = require("../models/StorageModel");

const UpdateStorage = async (userId, systemInformation) => {
  const storages = systemInformation.diskLayout;
  storages.forEach(async (storage, index) => {
    try {
      const query = { user: userId, index: index };
      const update = { $set: { ...storage, user: userId, index: index } };
      const options = { upsert: true };
      const response = await StorageModel.updateOne(query, update, options);
      console.log("Update storage ", index, " response is ", response);
    } catch (error) {
      console.log(error);
      return error;
    }
  });
};

module.exports = { UpdateStorage };
