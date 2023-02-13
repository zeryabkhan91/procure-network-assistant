const { app, BrowserWindow, ipcMain } = require("electron");

const path = require("path");
const systemInfo = require("./src/helper");
const AutoLaunch = require("auto-launch");
const { default: fetch } = require("electron-fetch");

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

const callQuery = async () => {
  const systemInformation = await systemInfo();
  const { memMax, memSlots, ...motherboardRequired } =
    systemInformation.baseboard;
  const { cache, ...cpuRequired } = systemInformation.cpu;
  const networkRequired = systemInformation.net.map((network) => {
    const {
      speed,
      dnsSuffix,
      ieee8021xAuth,
      ieee8021xState,
      carrierChanges,
      ...networkRequired
    } = network;
    return networkRequired;
  });

  const displayRequired = systemInformation.graphics.displays.map((display) => {
    const {
      sizeX,
      sizeY,
      pixelDepth,
      resolutionX,
      resolutionY,
      positionX,
      positionY,
      ...displayRequired
    } = display;
    return displayRequired;
  });

  const storageRequired = systemInformation.diskLayout.map((storage) => {
    const {
      bytesPerSector,
      totalCylinders,
      totalHeads,
      totalSectors,
      totalTracks,
      tracksPerCylinder,
      sectorsPerTrack,
      temperature,
      ...storageRequired
    } = storage;
    return storageRequired;
  });

  const diskRest = systemInformation.fsSize.map((disk) => {
    const { fs, rw, ...diskRest } = disk;
    return { fileSystem: fs, readWrite: rw, ...diskRest };
  });

  const { list, ...processRequired } = systemInformation.processes;

  fetch("http://localhost:6100/api/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbElkIjoicmVwb3Rlc3Q5MTdAZ21haWwuY29tIiwidGVuYW50SWQiOiI2MjgwYzI2ZGRkNzdhNjQzNjY2ZDY5MmIiLCJ0b2tlblVzZSI6ImFjY2VzcyIsInVzZXJJZCI6IjYzNDAxZTIzODZhZjBiNjEyMTA1OGRhZiIsImlhdCI6MTY3NjMwOTc1NCwiZXhwIjoxNjc2Mzk2MTU0fQ._res7x7PkAZcle-MU--z8RL_blFC919JVirUH9iyZu4",
    },
    body: JSON.stringify({
      query: `
      mutation ($input: CreateNetworkAssetsInput!) {
        createNetworkAsset(
          input: $input
        ) {
          success
          networkAssets {
            id
          }
        }
      }
      `,
      variables: {
        input: {
          userName: systemInformation.os.hostname,
          battery: systemInformation.battery,
          system: systemInformation.system,
          bios: {
            vendor: systemInformation.bios.vendor,
            version: systemInformation.bios.version,
            releaseDate: systemInformation.bios.releaseDate,
          },
          motherboard: motherboardRequired,
          operatingSystem: systemInformation.os,
          cpu: cpuRequired,
          graphics: systemInformation.graphics.controllers,
          display: displayRequired,
          network: networkRequired,
          memory: systemInformation.mem,
          storage: storageRequired,
          disk: diskRest,
          port: systemInformation.networkConnections,
          process: processRequired,
        },
      },
    }),
  })
    .then((res) => res.json())
    .then((result) => {
      if (result.data.createNetworkAsset.success) {
        win.webContents.send("asynchronous-message", { loading: false });
      }
    });
};

const asyncfunc = async () => {
  win.webContents.send("asynchronous-message", { loading: true });
  callQuery();
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
