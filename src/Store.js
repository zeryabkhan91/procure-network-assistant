const { UpdateBattery } = require("./controllers/BatteryController");
const { UpdateBios } = require("./controllers/BiosController");
const { UpdateCpu } = require("./controllers/CpuController");
const { UpdateDisk } = require("./controllers/DiskController");
const { UpdateDisplay } = require("./controllers/DisplayController");
const { UpdateGraphics } = require("./controllers/GraphicsController");
const { UpdateMemory } = require("./controllers/MemoryController");
const { UpdateMotherBoard } = require("./controllers/MotherBoardController");
const { UpdateNetwork } = require("./controllers/NetworkController");
const {
  UpdateOperatingSystem,
} = require("./controllers/OperatingSystemController");
const { UpdatePort } = require("./controllers/PortController");
const { UpdateProcess } = require("./controllers/ProcessController");
const { UpdateStorage } = require("./controllers/StorageController");
const { UpdateSystem } = require("./controllers/SystemController");
const { UpdateWifi } = require("./controllers/WifiController");

const storeData = (userId, systemInformation) => {
  UpdateBattery(userId, systemInformation);
  UpdateSystem(userId, systemInformation);
  UpdateBios(userId, systemInformation);
  UpdateMotherBoard(userId, systemInformation);
  UpdateCpu(userId, systemInformation);
  UpdateDisplay(userId, systemInformation);
  UpdateGraphics(userId, systemInformation);
  UpdateNetwork(userId, systemInformation);
  UpdateDisk(userId, systemInformation);
  UpdateMemory(userId, systemInformation);
  UpdateOperatingSystem(userId, systemInformation);
  UpdatePort(userId, systemInformation);
  UpdateProcess(userId, systemInformation);
  UpdateStorage(userId, systemInformation);
  UpdateWifi(userId, systemInformation);
};

module.exports = storeData;
