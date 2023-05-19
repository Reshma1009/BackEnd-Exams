const mongoose = require("mongoose");
// ZI32L521LfSkeIjl examOne
function dbConnection() {
  mongoose
    .connect(process.env.MONGODB_URL)
    .then(() => console.log("MongoDb Connected!"));
}
module.exports = dbConnection;