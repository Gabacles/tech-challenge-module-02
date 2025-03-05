import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { IUser } from "./models/user.interface";
import { UserRole } from "./models/userRoles.enum";
import { Post } from "./post.entity";

@Entity({
  name: "users",
})
export class User implements IUser {
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  id?: string;

  @Column({ name: "name", type: "text" })
  name: string;

  @Column({ name: "email", type: "text", unique: true })
  email: string;

  @Column({ type: "enum", enum: UserRole })
  roles: UserRole;

  @Column({ name: "password_hash", type: "text", select: false })
  passwordHash: string;

  @OneToMany(() => Post, (post) => post.author_id)
  posts?: Post[];
}
