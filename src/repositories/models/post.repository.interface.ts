import { IPost } from "@/entities/models/post.interface";

export interface IPostRepository {
  createPost(post: IPost): Promise<IPost>;
  findPostById(id: string): Promise<IPost | null>;
  findAllPosts(page: number, limit: number): Promise<IPost[]>;
  updatePost(post: IPost): Promise<IPost | null>;
  deletePost(id: string): Promise<void>;
}
