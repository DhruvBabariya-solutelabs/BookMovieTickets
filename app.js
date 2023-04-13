import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    app.listen(2000, () => {
      console.log("Server started");
    });
  })
  .catch((err) => {
    console.log(err);
  });
