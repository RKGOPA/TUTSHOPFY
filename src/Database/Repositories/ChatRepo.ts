import { APP_DATASOURCE } from "../config/datasource";
import { Chat } from "../Entities/Chat";
import { UserAccount } from "../Entities/UserAccount";

const chat_repo = APP_DATASOURCE.getRepository(Chat)
chat_repo.extend({
    
})
