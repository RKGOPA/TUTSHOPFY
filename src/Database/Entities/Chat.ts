import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Message } from "./Message";
import { UserAccount } from "./UserAccount";
@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  sender_id!: number;
  @Column()
  receiver_id!: number;
  @OneToMany(() => Message, (message) => message.chat)
  message!: Message;
  @OneToMany(() => UserAccount, (user) => user.chat)
  user!: UserAccount;
}
