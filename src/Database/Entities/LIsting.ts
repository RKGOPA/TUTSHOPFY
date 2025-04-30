import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";
import { UserAccount } from "./UserAccount";

@Entity()
export class Listing {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  description!: string;
  @Column()
  category!: string;
  @Column()
  title!: string;
  @Column()
  price!: number;
  @Column()
  createdAt!: Date;
  //Many Listings belong to One User
  @ManyToOne(() => UserAccount, (user) => user.listing)
  user!: UserAccount;
}
