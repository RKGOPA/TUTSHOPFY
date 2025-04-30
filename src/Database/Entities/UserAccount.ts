import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Listing } from "./LIsting";

@Entity()
export class UserAccount {
  //set up the PK
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  // you have to put ! to the end of the column names to tell typescript that  the field has been initalized
  email!: string;
  @Column()
  userName!: string;
  @Column()
  verfication_email!: string;
  @Column()
  password!: string;
  @Column()
  phone_number!: string;
  @Column()
  balance!: number;
  @Column()
  location!: string;
  //sets a one to many relationship with Listing
  //one user has Many Listing
  @OneToMany(() => Listing, (listing) => listing.user)
  listing!: Listing;
}
