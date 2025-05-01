"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.order_items_repo = void 0;
const datasource_1 = require("../config/datasource");
const OrderItem_1 = require("../Entities/OrderItem");
exports.order_items_repo = datasource_1.APP_DATASOURCE.getRepository(OrderItem_1.OrderItem);
exports.order_items_repo.extend({});
