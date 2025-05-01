import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UserAccount } from "./UserAccount";
import { Listing } from "./Listing";

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  stars!: number;
  @Column()
  content!: string;
  @ManyToOne(() => UserAccount, (user) => user.review)
  user!: UserAccount;
  @ManyToOne(() => Listing, (listing) => listing.review)
  listing!: Listing;
  @Column()
  user_id!: string;
  @Column()
  listing_id!: string;

}
