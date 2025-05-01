import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Order } from "./Order";
import { Listing } from "./Listing";
@Entity()
export class OrderItem {
  @PrimaryGeneratedColumn()
  id!: number;
  @ManyToOne(() => Order, (order) => order.order_item)
  order!: Order;
  @OneToOne(() => Listing, (listing) => listing.order_item)
  listing!: Listing;
  @Column()
  quantity!: number;
  @Column()
  listing_id!: number;
}
