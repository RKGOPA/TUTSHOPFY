import { APP_DATASOURCE } from "../config/datasource";
import { Chat } from "../Entities/Chat";
import { Review } from "../Entities/Review";
import { UserAccount } from "../Entities/UserAccount";

const review_repo = APP_DATASOURCE.getRepository(Review)
review_repo.extend({
    
})
