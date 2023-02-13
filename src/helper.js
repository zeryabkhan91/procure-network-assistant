const si = require("systeminformation");

const systemInfo = async () => {
  const systemInformation = await si.getAllData();
  return systemInformation;
};

module.exports = systemInfo;
