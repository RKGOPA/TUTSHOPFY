"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.images_repo = void 0;
const datasource_1 = require("../config/datasource");
const Images_1 = require("../Entities/Images");
exports.images_repo = datasource_1.APP_DATASOURCE.getRepository(Images_1.Images);
exports.images_repo.extend({});
