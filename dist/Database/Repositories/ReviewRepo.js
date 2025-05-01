"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const datasource_1 = require("../config/datasource");
const Review_1 = require("../Entities/Review");
const review_repo = datasource_1.APP_DATASOURCE.getRepository(Review_1.Review);
review_repo.extend({});
