import express from "express";
import cors from "cors";
import { APP_DATASOURCE } from "./Database/config/datasource";
//init the database connection
APP_DATASOURCE.initialize()
  //call back function ()=>{} gets call called if connection is successful
  .then(() => {
    const app = express();

    //allow the  to parse json and allow any connection request from any domain (add cors)
    app.use(express.json());
    app.use(cors({ origin: "*" }));
  })
  .catch((err) => {
    console.log("erro occured  err_details : ", err);
  });

// run the app in dev mode  -> npm run start:dev
// build the app -> npm run build
// start app -> npm start
// but u have to build the app before u can start it
