import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("mongoDd is Connected");
  })
  .catch((err) => {
    console.log("err");
  });

const app = express();

app.listen(3000, () => {
  console.log("Server is run on port 3000 !");
});

