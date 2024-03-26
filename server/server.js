import express from "express";
import morgan from "morgan";
import cors from "cors";

import { config } from "dotenv";

import router from "./router/route.js";

// cimport connection file
import connect from "./database/conn.js";

const app = express();
// const cors = require('cors');
// app middleawares
app.use(morgan("tiny"));
app.use(cors());
app.use(express.json());
config();

// appliction port
const port = process.env.PORT || 8080;

// routes

app.use("/api", router); // apis

app.get("/", (req, res) => {
  try {
    res.json("Get Request");
  } catch (error) {
    res.json(error);
  }
});

// start server when we have valid connection
// calling connection
connect()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
      });
    } catch (error) {
      console.log("cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("invalid database connection");
  });
