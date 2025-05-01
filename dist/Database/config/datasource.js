"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.APP_DATASOURCE = void 0;
const typeorm_1 = require("typeorm");
const UserAccount_1 = require("../Entities/UserAccount");
const Listing_1 = require("../Entities/Listing");
const Review_1 = require("../Entities/Review");
const Images_1 = require("../Entities/Images");
const Message_1 = require("../Entities/Message");
const Chat_1 = require("../Entities/Chat");
const Order_1 = require("../Entities/Order");
const OrderItem_1 = require("../Entities/OrderItem");
const SocialAccount_1 = require("../Entities/SocialAccount");
// this is the data source for  the  whole app
exports.APP_DATASOURCE = new typeorm_1.DataSource({
    type: "mysql",
    host: "localhost",
    password: "admin",
    username: "root",
    database: "campus_plug",
    synchronize: true,
    //add more configs for your database connection
    // add ur entities here
    entities: [
        UserAccount_1.UserAccount,
        Listing_1.Listing,
        Review_1.Review,
        Images_1.Images,
        Message_1.Message,
        Chat_1.Chat,
        Order_1.Order,
        OrderItem_1.OrderItem,
        SocialAccount_1.SocialAccount,
    ],
});
