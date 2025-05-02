import { DataSource } from "typeorm";
import { UserAccount } from "../Entities/UserAccount";
import { Listing } from "../Entities/Listing";
import { Review } from "../Entities/Review";
import { Images } from "../Entities/Images";
import { Message } from "../Entities/Message";
import { Chat } from "../Entities/Chat";
import { Order } from "../Entities/Order";
import { OrderItem } from "../Entities/OrderItem";
import { SocialAccount } from "../Entities/SocialAccount";
// this is the data source for  the  whole app
export const APP_DATASOURCE = new DataSource({
  type: "mysql",
  host: "localhost",
  password: "",
  username: "root",
  database: "campus_plug",
  synchronize: true,
  //add more configs for your database connection

  // add ur entities here
  entities: [
    UserAccount,
    Listing,
    Review,
    Images,
    Message,
    Chat,
    Order,
    OrderItem,
    SocialAccount,
  ],
});
