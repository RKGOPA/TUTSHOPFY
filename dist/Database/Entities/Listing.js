"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Listing = void 0;
const typeorm_1 = require("typeorm");
const UserAccount_1 = require("./UserAccount");
const Review_1 = require("./Review");
const Images_1 = require("./Images");
const OrderItem_1 = require("./OrderItem");
let Listing = class Listing {
};
exports.Listing = Listing;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Listing.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Listing.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Listing.prototype, "category", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Listing.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Listing.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Listing.prototype, "user_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Listing.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => UserAccount_1.UserAccount, (user) => user.listing),
    __metadata("design:type", UserAccount_1.UserAccount)
], Listing.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Review_1.Review, (review) => review.listing),
    __metadata("design:type", Review_1.Review)
], Listing.prototype, "review", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Listing.prototype, "quantity", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Images_1.Images, (image) => image.listing),
    __metadata("design:type", Images_1.Images)
], Listing.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => OrderItem_1.OrderItem, (order_item) => order_item.listing),
    __metadata("design:type", OrderItem_1.OrderItem)
], Listing.prototype, "order_item", void 0);
exports.Listing = Listing = __decorate([
    (0, typeorm_1.Entity)()
], Listing);
