const { app, BrowserWindow } = require("electron");

const path = require("path");
const { systemInfo, getUserId, getdata } = require("./src/helper");
// const storeData = require("./src/Store");
const mongoConnect = require("./src/database/database");
const { removeUser } = require("./src/storage/storage");
const AutoLaunch = require("auto-launch");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    // backgroundColor: "#041E42",
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
}

const asyncfunc = async () => {
  mongoConnect();

  const users = await getdata();
  console.log(users);

  const si = await systemInfo();
  console.log(si.uuid.macs[0]);
  await getUserId(si);

  console.log('User created')
  // storeData(id, si);

  // removeUser();
};

asyncfunc();

app.whenReady().then(() => {
  let autoLaunch = new AutoLaunch({
    name: "procure-network-assistant",
    path: app.getPath("exe"),
  });
  autoLaunch.isEnabled().then((isEnabled) => {
    if (!isEnabled) autoLaunch.enable();
  });
  createWindow();
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
