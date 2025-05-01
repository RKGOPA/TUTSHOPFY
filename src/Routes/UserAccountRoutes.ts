import { Router } from "express";
console.log("UserAccountRoutes loaded");

import { registration_schema } from "./Schemas/UserRegistrationSchema";
const router = Router();

router.post("/register", (req, res) => {
  const { value, error } = registration_schema.validate(req.body);
  error
    ? res.status(400).json({ error: error.details[0].message })
    : res.json(value);
});

export default router;
