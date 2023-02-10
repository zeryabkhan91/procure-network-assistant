const AssetModel = require("../models/AssetModel");

const createAsset = async (systemInfo) => {
  try {
    console.log(systemInfo.net);
    const response = await AssetModel.updateOne(
      { mac: systemInfo.uuid.macs[0] },
      {
        $set: {
          userName: systemInfo.os.hostname,
          ip: systemInfo.net[1].ip4,
          mac: systemInfo.uuid.macs[0],
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
          wifi: systemInfo.wifiNetworks,
        },
      },
      { upsert: true }
    );
    console.log(response);
    const acknowledged = response.acknowledged;
    return acknowledged;
  } catch (error) {
    console.log(error);
    return error;
  }
};

module.exports = createAsset;
