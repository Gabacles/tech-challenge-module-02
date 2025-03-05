import { IUser } from "@/entities/models/user.interface";
import { IUserRepository } from "@/repositories/models/user.repository.interface";
import { ResourceNotFoundError } from "./errors/resource-not-found-error";
import { QueryFailedError } from "typeorm";

export class FindUserByIdUseCase {
  constructor(private userRepository: IUserRepository) {}

  async handler(id: string): Promise<IUser | null> {
    try {
      const user = await this.userRepository.findUserById(id);

      if (!user) throw new ResourceNotFoundError();

      return user;
    } catch (error) {
      if (error instanceof QueryFailedError) {
        throw new ResourceNotFoundError();
      }

      throw error;
    }
  }
}
