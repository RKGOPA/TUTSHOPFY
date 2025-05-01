import { APP_DATASOURCE } from "../config/datasource";
import { Chat } from "../Entities/Chat";
import { Images } from "../Entities/Images";
import { Listing } from "../Entities/Listing";
import { Review } from "../Entities/Review";
import { UserAccount } from "../Entities/UserAccount";

export const listing_repo = APP_DATASOURCE.getRepository(Listing);
listing_repo.extend({});
