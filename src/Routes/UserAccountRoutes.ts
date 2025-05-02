import { Router } from "express";
import multer, { Multer } from "multer";
import path from "path";
import fs from "fs";
import mime from "mime-types";
console.log("UserAccountRoutes loaded");

import {
  registration_schema,
  registration_schema_type,
} from "./Schemas/UserRegistrationSchema";
import { create_user } from "../Database/Service/UserAccountService";
import { is_valid_posting } from "../Utils/ApproveListing";
const router = Router();
const storage = multer.diskStorage({
  destination(req, file, callback) {
    const dir = path.join(
      "public",
      `${req.body.username}`,
      "listing",
      "images",
      `${req.body.title}`
    );
    fs.mkdir(dir, { recursive: true }, (err) => {
      if (err) {
        callback(err, "");
      } else {
        callback(null, dir);
      }
    });
  },
  filename(req, file, cb) {
    const suffix = new Date().toISOString().replace(/[:.]/g, "-");
    const file_name = suffix + `_${file.originalname}`;
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

router.post("/create_listing", upload.array("images", 3), async (req, res) => {
  const files = req.files as Express.Multer.File[];
  if (files && Array.isArray(files)) {
    const contents = await Promise.all(
      files.map(async (file) => {
        const base64 = fs.readFileSync(file.path).toString("base64");
        const mimeType = mime.lookup(file.originalname);

        if (!mimeType || !mimeType.startsWith("image/")) {
          throw new Error(`Unsupported MIME type: ${mimeType}`);
        }

        return {
          inlineData: {
            mimeType,
            data: base64,
          },
        };
      })
    );
    const result = await is_valid_posting(contents);
    if (result.includes("invalid")) {
      res
        .status(400)
        .json({ message: "sorry can not allow prohibited items to listed" });
    } else {
      res.status(201).json({ message: "listing created" });
    }
    console.log("ai response : ", result);
  }
});

export default router;
