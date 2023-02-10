const si = require("systeminformation");

const systemInfo = async () => {
  const systemInformation = await si.getAllData();
  // console.log(systemInformation, "system information");
  return systemInformation;
};

// const createAsset = async (systemInfo) => {
//   const macAddress = systemInfo.uuid.macs[0];
//   const id = await createAsset();
//   return id;
// };

module.exports = systemInfo;
