const DeviceModel = require("../models/DeviceModel");
const { setLocalUser } = require("../storage/storage");

const createUser = async (devices) => {
  const device = new DeviceModel(devices);
  try {
    const response = await device.save();
    const id = response._id.toString();
    setLocalUser(id);
    return id;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = { createUser };
