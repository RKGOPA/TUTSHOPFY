import { APP_DATASOURCE } from "../config/datasource";
import { Chat } from "../Entities/Chat";
import { Images } from "../Entities/Images";
import { Listing } from "../Entities/Listing";
import { Order } from "../Entities/Order";
import { OrderItem } from "../Entities/OrderItem";
import { Review } from "../Entities/Review";
import { UserAccount } from "../Entities/UserAccount";

export const order_items_repo = APP_DATASOURCE.getRepository(OrderItem);
order_items_repo.extend({});
