import { IUserRepository } from "@/repositories/models/user.repository.interface";
import { invalidCredentialsError } from "./errors/invalid-credentials-error";

export class SigninUseCase {
  constructor(private readonly userRepository: IUserRepository) {}

  async handler(email: string) {
    const user = await this.userRepository.findUserByEmail(email);

    if (!user) {
      throw new invalidCredentialsError();
    }

    return user;
  }
}
