// require("dotenv").config({path: './env'});
import dotenv from "dotenv";

// import mongoose from "mongoose";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});
connectDB();









// import mongoose from "mongoose";
// const dotenv = require("dotenv");
// // import { DB_NAME } from "./constants";
// import express from "express";
// // require("dotenv").config();
// dotenv.config();
// const app = express();

// (async () => {
//   try {
//     await mongoose.connect(`${process.env.MONGODB_URI}`);
//     app.on("error", (error) => {
//       console.log("Error ", error);
//       throw error;
//     });

//     app.listen(process.env.PORT, () => {
//       console.log(`App is listning on port ${process.env.PORT}`);
//     });
//   } catch (error) {
//     console.log("Error ", error);
//     throw error;
//   }
// })();
