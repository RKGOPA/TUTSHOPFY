"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasource_1 = require("../config/datasource");
const UserAccount_1 = require("../Entities/UserAccount");
const user_account_repo = datasource_1.APP_DATASOURCE.getRepository(UserAccount_1.UserAccount);
user_account_repo.extend({});
