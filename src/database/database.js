const { default: mongoose } = require("mongoose");

const mongoConnect = () => {
  mongoose.connect(
    "mongodb+srv://repotest914:P%40ss1234.@procure-desktop-local.sxypalh.mongodb.net/procure-desktop",
    { useNewUrlParser: true }
  );
  var conn = mongoose.connection;
  conn.on("connected", function () {
    console.log("database is connected successfully");
    conn.on("disconnected", function () {
      console.log("database is disconnected successfully");
    });
    conn.on("error", console.error.bind(console, "connection error:"));
  });
};

module.exports = mongoConnect;
