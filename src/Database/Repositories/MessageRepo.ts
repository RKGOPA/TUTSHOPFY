import { APP_DATASOURCE } from "../config/datasource";
import { Chat } from "../Entities/Chat";
import { Message } from "../Entities/Message";
import { UserAccount } from "../Entities/UserAccount";

const message_repo = APP_DATASOURCE.getRepository(Message);
message_repo.extend({});
