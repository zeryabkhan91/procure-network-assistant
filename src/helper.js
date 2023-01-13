const SystemModel = require("./models/SystemModel");
const si = require("systeminformation");
const { getLocalUser } = require("./storage/storage");
const { createUser } = require("./controllers/UserController");
const UserModel = require("./models/DeviceModel");

const getdata = async () => {
  const usersystem = await UserModel.aggregate([
    { $match: { mac: { $in: ["e4:70:b8:ca:8e:ba", "f8:59:71:26:07:9b"] } } },
    {
      $lookup: {
        from: "batteries",
        localField: "_id",
        foreignField: "user",
        as: "batteries",
      },
    },
    {
      $lookup: {
        from: "bios",
        localField: "_id",
        foreignField: "user",
        as: "bios",
      },
    },
    {
      $lookup: {
        from: "cpus",
        localField: "_id",
        foreignField: "user",
        as: "cpus",
      },
    },
    {
      $lookup: {
        from: "disks",
        localField: "_id",
        foreignField: "user",
        as: "disks",
      },
    },
    {
      $lookup: {
        from: "displays",
        localField: "_id",
        foreignField: "user",
        as: "displays",
      },
    },
    {
      $lookup: {
        from: "graphics",
        localField: "_id",
        foreignField: "user",
        as: "graphics",
      },
    },
    {
      $lookup: {
        from: "memories",
        localField: "_id",
        foreignField: "user",
        as: "memories",
      },
    },
    {
      $lookup: {
        from: "motherboards",
        localField: "_id",
        foreignField: "user",
        as: "motherboards",
      },
    },
    {
      $lookup: {
        from: "networks",
        localField: "_id",
        foreignField: "user",
        as: "networks",
      },
    },
    {
      $lookup: {
        from: "operatingsystems",
        localField: "_id",
        foreignField: "user",
        as: "operatingsystems",
      },
    },
    {
      $lookup: {
        from: "ports",
        localField: "_id",
        foreignField: "user",
        as: "ports",
      },
    },
    {
      $lookup: {
        from: "processes",
        localField: "_id",
        foreignField: "user",
        as: "processes",
      },
    },
    {
      $lookup: {
        from: "storages",
        localField: "_id",
        foreignField: "user",
        as: "storages",
      },
    },
    {
      $lookup: {
        from: "systems",
        localField: "_id",
        foreignField: "user",
        as: "systems",
      },
    },
    {
      $lookup: {
        from: "wifis",
        localField: "_id",
        foreignField: "user",
        as: "wifis",
      },
    },
  ]);
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
