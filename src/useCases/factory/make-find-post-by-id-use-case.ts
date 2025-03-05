import { PostRepository } from "@/repositories/post.repository";
import { FindPostByIdUseCase } from "../find-post-by-id";

export function makeFindPostByIdUseCase() {
  const postRepository = new PostRepository();
  const findPostByIdUseCase = new FindPostByIdUseCase(postRepository);

  return findPostByIdUseCase;
}
