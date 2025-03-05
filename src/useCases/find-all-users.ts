import { UserRepository } from "@/repositories/user.repository";

export class FindAllUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async handler(page: number, limit: number) {
    return await this.userRepository.findAllUsers(page, limit);
  }
}
