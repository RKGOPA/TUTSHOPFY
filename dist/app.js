"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const datasource_1 = require("./Database/config/datasource");
const UserAccountRoutes_1 = __importDefault(require("./Routes/UserAccountRoutes"));
const http_1 = require("http");
const socket_io_1 = require("socket.io");
//init the database connection
datasource_1.APP_DATASOURCE.initialize()
    //call back function ()=>{} gets call called if connection is successful
    .then(() => {
    const app = (0, express_1.default)();
    const HttpServer = (0, http_1.createServer)(app);
    // set up the websocket
    const io = new socket_io_1.Server(HttpServer, {
        cors: {
            origin: "*",
        },
    });
    //allow the  to parse json and allow any connection request from any domain (add cors)
    app.use(express_1.default.json());
    app.use((0, cors_1.default)({ origin: "*" }));
    //user routes
    app.use("/api/user", UserAccountRoutes_1.default);
    app.get("/", (req, res) => {
        console.log("Root route hit!");
        res.send("hi");
    });
    //listen for connection on all interfaces
    HttpServer.listen(3000, "0.0.0.0", () => {
        console.log("serer is running on port 3000");
    });
})
    .catch((err) => {
    console.log("erro occured  err_details : ", err);
});
// run the app in dev mode  -> npm run start:dev
// build the app -> npm run build
// start app -> npm start
// but u have to build the app before u can start it
