import express from "express";
import cors from "cors";
import { APP_DATASOURCE } from "./Database/config/datasource";
import UserAccountRoutes from "./Routes/UserAccountRoutes";
import { createServer } from "http";
import { Server } from "socket.io";

//init the database connection
APP_DATASOURCE.initialize()
  //call back function ()=>{} gets call called if connection is successful
  .then(() => {
    const app = express();
    const HttpServer = createServer(app);

    // set up the websocket
    const io = new Server(HttpServer, {
      cors: {
        origin: "*",
      },
    });

    //allow the  to parse json and allow any connection request from any domain (add cors)
    app.use(express.json());
    app.use(cors({ origin: "*" }));

    //user routes
    app.use("/api/user", UserAccountRoutes);

    //listen for connection on all interfaces
    HttpServer.listen(3002, "0.0.0.0", () => {
      console.log("serer is running on port 3002");
    });
  })
  .catch((err) => {
    console.log("erro occured  err_details : ", err);
  });

// run the app in dev mode  -> npm run start:dev
// build the app -> npm run build
// start app -> npm start
// but u have to build the app before u can start it
