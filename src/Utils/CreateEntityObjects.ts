import { Chat } from "../Database/Entities/Chat";
import { Images } from "../Database/Entities/Images";
import { Listing } from "../Database/Entities/Listing";
import { Order } from "../Database/Entities/Order";
import { Review } from "../Database/Entities/Review";
import { SocialAccount } from "../Database/Entities/SocialAccount";
import { UserAccount } from "../Database/Entities/UserAccount";
import { registration_schema_type } from "../Routes/Schemas/UserRegistrationSchema";
import { genSalt, hash, compare } from "bcrypt";

async function hash_password(password: string): Promise<string> {
  const salt = await genSalt(5);
  const hashed_password = await hash(password, salt);
  return hashed_password;
}

export default async function is_correct_password(
  password: string,
  hashed_password: string
): Promise<boolean> {
  return await compare(password, hashed_password);
}

export const create_new_user_account_object = async (
  registration_data: registration_schema_type
) => {
  const user_account = new UserAccount();
  user_account.balance = 0;
  user_account.email = registration_data.email;
  user_account.has_social_account = false;
  user_account.location = registration_data.location;
  user_account.password = await hash_password(registration_data.password);
  user_account.phone_number = registration_data.phone_number;
  user_account.userName = registration_data.username;
  user_account.verified = false;
  return user_account;
};
