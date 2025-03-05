import { IPost } from "@/entities/models/post.interface";
import { IPostRepository } from "@/repositories/models/post.repository.interface";

export class UpdatePostUseCase {
  constructor(private postRepository: IPostRepository) {}

  async handler(post: IPost): Promise<IPost | null> {
    const updatedPost = await this.postRepository.updatePost(post);

    return updatedPost;
  }
}
