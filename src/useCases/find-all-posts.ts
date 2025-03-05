import { PostRepository } from "@/repositories/post.repository";

export class FindAllPostsUseCase {
  constructor(private postRepository: PostRepository) {}

  async handler(page: number, limit: number, search: string) {
    return this.postRepository.findAllPosts(page, limit, search);
  }
}
