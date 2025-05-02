import { APP_DATASOURCE } from "../config/datasource";
import { UserAccount } from "../Entities/UserAccount";

export const user_account_repo = APP_DATASOURCE.getRepository(UserAccount);
user_account_repo.extend({});
