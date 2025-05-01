"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_repo = void 0;
const datasource_1 = require("../config/datasource");
const Order_1 = require("../Entities/Order");
exports.order_repo = datasource_1.APP_DATASOURCE.getRepository(Order_1.Order);
exports.order_repo.extend({});
