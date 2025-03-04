import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IPost } from "./models/post.interface";
import { User } from "./user.entity";

@Entity({
  name: "posts",
})
export class Post implements IPost {
  @PrimaryGeneratedColumn("uuid", { name: "id" })
  id?: string;

  @Column({ name: "title", type: "text" })
  title: string;

  @Column({ name: "content", type: "text" })
  content: string;

  @ManyToOne(() => User, (user) => user.id, { onDelete: "CASCADE" })
  authorId: string;
}
