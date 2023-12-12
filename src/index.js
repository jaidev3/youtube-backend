import dotenv from "dotenv";
import { app } from "./app.js";
import connectDB from "./db/index.js";

dotenv.config({
  path: "./env",
});
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server running on port : ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("mongodb fail", err);
  });










  
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
