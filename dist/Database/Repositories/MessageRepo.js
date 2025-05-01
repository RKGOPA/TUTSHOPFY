"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasource_1 = require("../config/datasource");
const Message_1 = require("../Entities/Message");
const message_repo = datasource_1.APP_DATASOURCE.getRepository(Message_1.Message);
message_repo.extend({});
