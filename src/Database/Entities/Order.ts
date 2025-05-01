import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserAccount } from "./UserAccount";
import { OrderItem } from "./OrderItem";
@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  user_id!: number;
  @ManyToOne(() => UserAccount, (user) => user.order)
  user!: UserAccount;
  @Column()
  total!: number;
  @Column()
  createdAt!: Date;
  @Column()
  order_item_id!: number;

  @OneToMany(() => OrderItem, (order_item) => order_item.order)
  order_item!: OrderItem;
}
