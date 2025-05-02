import { Router } from "express";
console.log("UserAccountRoutes loaded");

import {
  registration_schema,
  registration_schema_type,
} from "./Schemas/UserRegistrationSchema";
import { create_user } from "../Database/Service/UserAccountService";
const router = Router();

router.post("/register", async (req, res) => {
  const { value, error } = registration_schema.validate(req.body);
  const registration_data: registration_schema_type = value;
  if (error) {
    res.status(400).json({ error: error.details[0].message });
  } else {
    const result = await create_user(registration_data);
    result
      ? res.status(201).json({ message: "user created" })
      : res.status(500).json({ message: "internal server error" });
  }
});
export default router;
