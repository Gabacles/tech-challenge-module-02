import { Repository } from "typeorm";
import { appDataSource } from "@/lib/typeorm/typeorm";
import { IPost } from "@/entities/models/post.interface";
import { Post } from "@/entities/post.entity";
import { IPostRepository } from "./models/post.repository.interface";

export class PostRepository implements IPostRepository {
  private postRepository: Repository<IPost>;

  constructor() {
    this.postRepository = appDataSource.getRepository<IPost>(Post);
  }

  async createPost(post: IPost): Promise<IPost> {
    return await this.postRepository.save(post);
  }

  async findPostById(id: string): Promise<IPost | null> {
    return await this.postRepository.findOne({
      relations: ["author_id"],
      where: { id },
    });
  }

  async findAllPosts(page: number, limit: number): Promise<IPost[]> {
    return await this.postRepository.find({
      relations: ["author_id"],
      skip: (page - 1) * limit,
      take: limit,
    });
  }

  async updatePost(post: IPost): Promise<IPost | null> {
    return await this.postRepository.save(post);
  }

  async deletePost(id: string): Promise<void> {
    await this.postRepository.delete(id);
  }
}
