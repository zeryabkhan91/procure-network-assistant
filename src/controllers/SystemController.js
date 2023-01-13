const SystemModel = require("../models/SystemModel");

const UpdateSystem = async (userId, systemInformation) => {
  const system = systemInformation.system;
  try {
    const query = { user: userId };
    const update = { $set: { ...system, user: userId } };
    const options = { upsert: true };
    const response = await SystemModel.updateOne(query, update, options);
    console.log("Update system response is ", response);
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { UpdateSystem };
