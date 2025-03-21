import { PostRepository } from "@/repositories/post.repository";
import { FindAllPostsUseCase } from "../find-all-posts";

export function makeFindAllPostsUseCase() {
  const postRepository = new PostRepository();
  const findAllPostsUseCase = new FindAllPostsUseCase(postRepository);

  return findAllPostsUseCase;
}
