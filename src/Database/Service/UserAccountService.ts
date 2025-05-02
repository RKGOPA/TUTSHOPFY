import { registration_schema_type } from "../../Routes/Schemas/UserRegistrationSchema";
import { create_new_user_account_object } from "../../Utils/CreateEntityObjects";
import { UserAccount } from "../Entities/UserAccount";
import { user_account_repo } from "../Repositories/UserAccountRepo";
//user account repository
const user_repo = user_account_repo;
// repo methods
export const create_user = async (
  registration_data: registration_schema_type
): Promise<boolean> => {

  const user_account = await create_new_user_account_object(registration_data);
  try {
    const result = await user_repo.save(user_account);
    return true;
  } catch (err) {
    console.log(err);
    return false;
  }
};
