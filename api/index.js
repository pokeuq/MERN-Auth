import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("conntected to monogDB");
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.listen(3000, () => {
  console.log("serv 3000");
});
