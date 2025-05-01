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
exports.UserAccount = void 0;
const typeorm_1 = require("typeorm");
const Listing_1 = require("./Listing");
const Review_1 = require("./Review");
const Images_1 = require("./Images");
const SocialAccount_1 = require("./SocialAccount");
const Chat_1 = require("./Chat");
const Order_1 = require("./Order");
let UserAccount = class UserAccount {
};
exports.UserAccount = UserAccount;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserAccount.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)()
    // you have to put ! to the end of the column names to tell typescript that  the field has been initalized
    ,
    __metadata("design:type", String)
], UserAccount.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserAccount.prototype, "userName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserAccount.prototype, "verfication_email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserAccount.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], UserAccount.prototype, "verified", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], UserAccount.prototype, "has_social_account", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserAccount.prototype, "phone_number", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], UserAccount.prototype, "balance", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], UserAccount.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Listing_1.Listing, (listing) => listing.user),
    __metadata("design:type", Listing_1.Listing)
], UserAccount.prototype, "listing", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Review_1.Review, (review) => review.user),
    __metadata("design:type", Review_1.Review)
], UserAccount.prototype, "review", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Images_1.Images, (image) => image.user),
    __metadata("design:type", Images_1.Images)
], UserAccount.prototype, "profile_pic", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => SocialAccount_1.SocialAccount, (social) => social.user),
    __metadata("design:type", SocialAccount_1.SocialAccount)
], UserAccount.prototype, "social_account", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Chat_1.Chat, (chat) => chat.user),
    __metadata("design:type", Chat_1.Chat)
], UserAccount.prototype, "chat", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Order_1.Order, (order) => order.user),
    __metadata("design:type", Order_1.Order)
], UserAccount.prototype, "order", void 0);
exports.UserAccount = UserAccount = __decorate([
    (0, typeorm_1.Entity)()
], UserAccount);
