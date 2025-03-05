import { PostRepository } from "@/repositories/post.repository";

export class FindAllPostsUseCase {
  constructor(private postRepository: PostRepository) {}

  async handler(page: number, limit: number) {
    return this.postRepository.findAllPosts(page, limit);
  }
}
