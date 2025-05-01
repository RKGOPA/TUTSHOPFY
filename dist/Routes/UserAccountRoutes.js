"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
console.log("UserAccountRoutes loaded");
const UserRegistrationSchema_1 = require("./Schemas/UserRegistrationSchema");
const router = (0, express_1.Router)();
router.post("/register", (req, res) => {
    const { value, error } = UserRegistrationSchema_1.registration_schema.validate(req.body);
    error
        ? res.status(400).json({ error: error.details[0].message })
        : res.json(value);
});
exports.default = router;
