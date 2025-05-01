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
exports.Images = void 0;
const typeorm_1 = require("typeorm");
const UserAccount_1 = require("./UserAccount");
const Listing_1 = require("./Listing");
let Images = class Images {
};
exports.Images = Images;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Images.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Listing_1.Listing, (listing) => listing.image),
    __metadata("design:type", Listing_1.Listing)
], Images.prototype, "listing", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => UserAccount_1.UserAccount, (user) => user.profile_pic),
    __metadata("design:type", UserAccount_1.UserAccount)
], Images.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Images.prototype, "image", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Images.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Images.prototype, "listing_id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Images.prototype, "user_id", void 0);
exports.Images = Images = __decorate([
    (0, typeorm_1.Entity)()
], Images);
