import { DataSource } from "typeorm";
import { UserAccount } from "../Entities/UserAccount";
// this is the data source for  the  whole app
export const APP_DATASOURCE = new DataSource({
  type: "mysql",
  //add more configs for your database connection

  // add ur entities here
  entities: [UserAccount],
});
