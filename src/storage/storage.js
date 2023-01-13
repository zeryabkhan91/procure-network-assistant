const storage = require("electron-json-storage");

const setLocalUser = (userId) => {
  storage.set("user", { id: userId }, function (error) {
    if (error) throw error;
  });
};

const getLocalUser = () => {
  return new Promise((resolve, reject) => {
    storage.get("user", (error, data) => {
      if (error) reject(error);
      resolve(data);
    });
  });
};

const removeUser = () => {
  storage.remove("user", function (error) {
    if (error) throw error;
    console.log("user removed");
  });
};

module.exports = { setLocalUser, getLocalUser, removeUser };
