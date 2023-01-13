const PortModel = require("../models/PortModel");

const UpdatePort = async (userId, systemInformation) => {
  const ports = systemInformation.networkConnections;
  ports.forEach(async (port, index) => {
    try {
      const query = { user: userId, index: index };
      const update = { $set: { ...port, user: userId, index: index } };
      const options = { upsert: true };
      const response = await PortModel.updateOne(query, update, options);
      console.log("Update port ", index, " response is ", response);
    } catch (error) {
      console.log(error);
      return error;
    }
  });
};

module.exports = { UpdatePort };
