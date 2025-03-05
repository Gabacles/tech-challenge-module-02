import { IPost } from "@/entities/models/post.interface";
import { IPostRepository } from "@/repositories/models/post.repository.interface";
import { RoleNotAllowedError } from "./errors/role-not-allowed-error";
import { UserRepository } from "@/repositories/user.repository";
import { UserRole } from "@/entities/models/userRoles.enum";

export class CreatePostUseCase {
  constructor(private postRepository: IPostRepository) {}

  async handler(post: IPost): Promise<IPost | undefined> {
    const userRepository = new UserRepository();
    const user = await userRepository.findUserById(post.author_id);

    if (user?.roles !== UserRole.TEACHER) {
      throw new RoleNotAllowedError();
    }

    return this.postRepository.createPost(post);
  }
}
