const NetworkModel = require("../models/NetworkModel");

const UpdateNetwork = async (userId, systemInformation) => {
  const networks = systemInformation.net;
  networks.forEach(async (network, index) => {
    try {
      const query = { user: userId, index: index };
      const update = { $set: { ...network, user: userId, index: index } };
      const options = { upsert: true };
      const response = await NetworkModel.updateOne(query, update, options);
      console.log("Update network ", index, " response is ", response);
    } catch (error) {
      console.log(error);
      return error;
    }
  });
};

module.exports = { UpdateNetwork };
