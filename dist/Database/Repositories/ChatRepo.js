"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasource_1 = require("../config/datasource");
const Chat_1 = require("../Entities/Chat");
const chat_repo = datasource_1.APP_DATASOURCE.getRepository(Chat_1.Chat);
chat_repo.extend({});
