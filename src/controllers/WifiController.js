const NetworkModel = require("../models/NetworkModel");
const WifiModel = require("../models/WifiModel");

const UpdateWifi = async (userId, systemInformation) => {
  const wifiNetworks = systemInformation.wifiNetworks;
  wifiNetworks.forEach(async (wifiNetwork, index) => {
    try {
      const query = { user: userId, index: index };
      const update = { $set: { ...wifiNetwork, user: userId, index: index } };
      const options = { upsert: true };
      const response = await WifiModel.updateOne(query, update, options);
      console.log("Update wifiNetwork ", index, " response is ", response);
    } catch (error) {
      console.log(error);
      return error;
    }
  });
};

module.exports = { UpdateWifi };
