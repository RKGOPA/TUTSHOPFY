// use joi to valid JSON STRUCTURE
import Joi from "joi";

// user Registration Schema
export const registration_schema = Joi.object({
  username: Joi.string().min(6).required(),
  email: Joi.string().email().required(),
  password: Joi.string().required(),
  phone_number: Joi.string().required(),
  location: Joi.string().required(),
});
