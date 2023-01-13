const si = require("systeminformation");
const { getLocalUser } = require("./storage/storage");
const { createUser } = require("./controllers/UserController");
const DeviceModel = require("./models/DeviceModel");

const getdata = async () => {
  const usersystem = await DeviceModel.find({});
  console.log(
    "============================================================",
    JSON.stringify(usersystem),
    "============================================================"
  );
};

const systemInfo = async () => {
  const systemInformation = await si.getAllData();
  return systemInformation;
};

const getUserId = async (systemInfo) => {

  const macAddress = systemInfo.uuid.macs[0]
  // const user = await getLocalUser();
  // if (!user.id) {
  const id = await createUser({
    firstName: "Procure",
    lastName: "Admin",
    mac: macAddress,
    battery: systemInfo.battery,
    system: systemInfo.system,
    bios: systemInfo.bios,
    motherboard: systemInfo.baseboard,
    cpu: systemInfo.cpu,
    display: systemInfo.graphics.displays[0],
    graphics: systemInfo.graphics.controllers[0],
    network: systemInfo.net,
    disk: systemInfo.fsSize,
    memory: systemInfo.mem,
    os: systemInfo.os,
    port: systemInfo.networkConnections,
    process: systemInfo.processes,
    storage: systemInfo.diskLayout,
    wifi: systemInfo.wifiNetworks
  });
  return id;
  // }
  // return user.id;
};

module.exports = { getdata, systemInfo, getUserId };
