import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Chat } from "./Chat";
@Entity()
export class Message {
  @PrimaryGeneratedColumn()
  id!: number;
  @Column()
  chat_id!: number;
  @ManyToOne(() => Chat, (chat) => chat.message)
  chat!: Chat;
  @Column()
  createdAt!: Date;
  @Column()
  content_type!: string;
  @Column()
  content!: string;

}
