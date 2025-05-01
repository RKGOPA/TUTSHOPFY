"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listing_repo = void 0;
const datasource_1 = require("../config/datasource");
const Listing_1 = require("../Entities/Listing");
exports.listing_repo = datasource_1.APP_DATASOURCE.getRepository(Listing_1.Listing);
exports.listing_repo.extend({});
