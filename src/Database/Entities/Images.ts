import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserAccount } from "./UserAccount";
import { Listing } from "./Listing";

@Entity()
export class Images {
  @PrimaryGeneratedColumn()
  id!: number;
  @OneToMany(() => Listing, (listing) => listing.image)
  listing!: Listing;
  @OneToOne(() => UserAccount, (user) => user.profile_pic)
  user!: UserAccount;
  @Column()
  image!: string;
  @Column()
  type!: string;
  @Column()
  listing_id!: string;
  @Column()
  user_id!: string;
}
