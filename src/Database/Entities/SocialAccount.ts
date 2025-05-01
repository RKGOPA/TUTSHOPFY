import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserAccount } from "./UserAccount";
@Entity()
export class SocialAccount {
  @PrimaryGeneratedColumn()
  id!: number;
  @OneToOne(() => UserAccount, (user) => user.social_account)
  user!: UserAccount;
  @Column()
  yearOfStudy!: number;
  @Column()
  course!: string;
  @Column()
  bio!: string;
  @Column()
  gender!: string;
  @Column()
  user_id!: string;
}
