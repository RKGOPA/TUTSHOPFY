"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasource_1 = require("../config/datasource");
const SocialAccount_1 = require("../Entities/SocialAccount");
const social_account_repo = datasource_1.APP_DATASOURCE.getRepository(SocialAccount_1.SocialAccount);
social_account_repo.extend({});
