const BatteryModel = require("../models/BatteryModel");
const BiosModel = require("../models/BiosModel");

const UpdateBattery = async (userId, systemInformation) => {
  const battery = systemInformation.battery;
  try {
    const query = { user: userId };
    const update = { $set: { ...battery, user: userId } };
    const options = { upsert: true };
    const response = await BatteryModel.updateOne(query, update, options);
    console.log("Update battery response is ", response);
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { UpdateBattery };
