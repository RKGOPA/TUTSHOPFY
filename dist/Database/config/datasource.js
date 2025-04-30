"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_DATASOURCE = void 0;
const typeorm_1 = require("typeorm");
const UserAccount_1 = require("../Entities/UserAccount");
// this is the data source for  the  whole app
exports.APP_DATASOURCE = new typeorm_1.DataSource({
    type: "mysql",
    //add more configs for your database connection
    // add ur entities here
    entities: [UserAccount_1.UserAccount],
});
