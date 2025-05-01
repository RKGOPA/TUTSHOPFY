import { APP_DATASOURCE } from "../config/datasource";
import { Chat } from "../Entities/Chat";
import { Images } from "../Entities/Images";
import { Review } from "../Entities/Review";
import { UserAccount } from "../Entities/UserAccount";

export const images_repo = APP_DATASOURCE.getRepository(Images);
images_repo.extend({});
