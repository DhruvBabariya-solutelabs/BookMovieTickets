import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import adminRouter from "./routers/AdminRouter.js";

dotenv.config();
const app = express();

app.use(bodyParser.json());

app.use("/admin", adminRouter);

app.use((err, req, res, next) => {
  res.status(err.statusCode).json({
    message: "Not found",
  });
});

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
