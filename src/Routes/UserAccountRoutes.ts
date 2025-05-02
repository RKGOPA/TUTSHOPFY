import { Router } from "express";
import multer, { Multer } from "multer";
console.log("UserAccountRoutes loaded");

import {
  registration_schema,
  registration_schema_type,
} from "./Schemas/UserRegistrationSchema";
import { create_user } from "../Database/Service/UserAccountService";
const router = Router();
const storage = multer.diskStorage({
  destination(req, file, callback) {
    callback(
      null,
      `$public/${req.body.username}/listings/images/${req.body.title}/`
    );
  },
  filename(req, file, cb) {
    const suffix = new Date().toDateString();
    const file_name = suffix + `${req.body.title}.${file.mimetype}`;
    cb(null, file_name);
  },
});
const upload = multer({ storage: storage });

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

router.post(
  "/create_listing",
  upload.array("images", 3),
  async (req, res) => {

  }
);

export default router;
