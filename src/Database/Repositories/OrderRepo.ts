import { APP_DATASOURCE } from "../config/datasource";
import { Chat } from "../Entities/Chat";
import { Images } from "../Entities/Images";
import { Listing } from "../Entities/Listing";
import { Order } from "../Entities/Order";
import { Review } from "../Entities/Review";
import { UserAccount } from "../Entities/UserAccount";

export const order_repo = APP_DATASOURCE.getRepository(Order);
order_repo.extend({});
