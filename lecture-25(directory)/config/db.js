const mongoose = require("mongoose");

async function connectDB() {
  if (!process.env.MONGO_URL) {
    throw new Error("MONGO_URL is not set. Add it to your .env file.");
  }

  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database Connected");
}

module.exports = connectDB;
