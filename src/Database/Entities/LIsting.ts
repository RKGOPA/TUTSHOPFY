import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  Timestamp,
} from "typeorm";
import { UserAccount } from "./UserAccount";
import { Review } from "./Review";
import { Images } from "./Images";
import { OrderItem } from "./OrderItem";

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
  user_id!: number;
  @Column()
  createdAt!: Date;
  //Many Listings belong to One User
  @ManyToOne(() => UserAccount, (user) => user.listing)
  user!: UserAccount;
  @ManyToOne(() => Review, (review) => review.listing)
  review!: Review;
  @Column()
  quantity!: number;
  @OneToMany(() => Images, (image) => image.listing)
  image!: Images;
  @OneToOne(() => OrderItem, (order_item) => order_item.listing)
  order_item!: OrderItem;
}
