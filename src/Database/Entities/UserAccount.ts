import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Listing } from "./Listing";
import { Review } from "./Review";
import { Images } from "./Images";
import { SocialAccount } from "./SocialAccount";
import { Chat } from "./Chat";
import { Order } from "./Order";

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
  @Column({ nullable: true })
  verfication_email?: string;
  @Column()
  password!: string;
  @Column()
  verified!: boolean;
  @Column()
  has_social_account!: boolean;
  @Column()
  phone_number!: string;
  @Column()
  balance!: number;
  @Column()
  location!: string;
  //sets a one to many relationship with Listing
  //one user has Many Listing
  @OneToMany(() => Listing, (listing) => listing.user, { nullable: true })
  listing?: Listing[];
  @OneToMany(() => Review, (review) => review.user, { nullable: true })
  review?: Review[];

  @OneToOne(() => Images, (image) => image.user, { nullable: true })
  profile_pic?: Images;
  @OneToOne(() => SocialAccount, (social) => social.user, { nullable: true })
  social_account?: SocialAccount;
  @ManyToOne(() => Chat, (chat) => chat.user, { nullable: true })
  chat?: Chat;
  @OneToMany(() => Order, (order) => order.user, { nullable: true })
  order?: Order[];
}
