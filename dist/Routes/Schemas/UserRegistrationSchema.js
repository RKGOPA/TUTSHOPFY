"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.registration_schema = void 0;
// use joi to valid JSON STRUCTURE
const joi_1 = __importDefault(require("joi"));
// user Registration Schema
exports.registration_schema = joi_1.default.object({
    username: joi_1.default.string().min(6).required(),
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
    phone_number: joi_1.default.string().required(),
    location: joi_1.default.string().required(),
});
