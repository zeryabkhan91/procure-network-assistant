const { app, BrowserWindow, ipcMain } = require("electron");

const path = require("path");
const systemInfo = require("./src/helper");
const mongoConnect = require("./src/database/database");
const AutoLaunch = require("auto-launch");
const createAsset = require("./src/controllers/AssetController");

let win;
app.whenReady().then(() => {
  let autoLaunch = new AutoLaunch({
    name: "procure-network-assistant",
    path: app.getPath("exe"),
  });
  autoLaunch.isEnabled().then((isEnabled) => {
    if (!isEnabled) autoLaunch.enable();
  });

  win = new BrowserWindow({
    width: 600,
    height: 400,
    resizable: false,
    backgroundColor: "#FFF",
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.setMenu(null);
  win.loadFile("./src/renderer/index.html");
  asyncfunc();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

const asyncfunc = async () => {
  win.webContents.send("asynchronous-message", { loading: true });
  mongoConnect();
  const systemInformation = await systemInfo();
  const response = await createAsset(systemInformation);
  console.log(response);
  if (response) {
    console.log(response);
    win.webContents.send("asynchronous-message", { loading: false });
  }
};

app.on("open-url", function (event, data) {
  event.preventDefault();
  link = data;
});

app.setAsDefaultProtocolClient("procure");

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
