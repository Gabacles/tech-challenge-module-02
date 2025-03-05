import { IPost } from "@/entities/models/post.interface";
import { IPostRepository } from "@/repositories/models/post.repository.interface";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";
import { QueryFailedError } from "typeorm";

export class FindPostByIdUseCase {
  constructor(private postRepository: IPostRepository) {}

  async handler(id: string): Promise<IPost | null> {
    try {
      const post = await this.postRepository.findPostById(id);

      if (!post) throw new ResourceNotFoundError();

      return post;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new ResourceNotFoundError();
      }

      throw error;
    }
  }
}
