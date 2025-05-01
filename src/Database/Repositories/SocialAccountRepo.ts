import { APP_DATASOURCE } from "../config/datasource";
import { SocialAccount } from "../Entities/SocialAccount";
import { UserAccount } from "../Entities/UserAccount";

const social_account_repo = APP_DATASOURCE.getRepository(SocialAccount)
social_account_repo.extend({
    
})
