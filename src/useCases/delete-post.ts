import { IPostRepository } from "@/repositories/models/post.repository.interface";

export class DeletePostUseCase {
  constructor(private postRepository: IPostRepository) {}

  async handler(id: string): Promise<void> {
    await this.postRepository.deletePost(id);
  }
}
