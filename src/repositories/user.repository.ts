import { Repository } from "typeorm";
import { appDataSource } from "@/lib/typeorm/typeorm";
import { User } from "@/entities/user.entity";
import { IUser } from "@/entities/models/user.interface";
import { IUserRepository } from "./models/user.repository.interface";

export class UserRepository implements IUserRepository {
  private userRepository: Repository<IUser>;

  constructor() {
    this.userRepository = appDataSource.getRepository<IUser>(User);
  }

  async createUser(user: IUser): Promise<IUser> {
    return await this.userRepository.save(user);
  }

  async findUserById(id: string): Promise<IUser | null> {
    return await this.userRepository.findOne({
      relations: ["posts"],
      where: { id },
    });
  }

  async findAllUsers(page: number, limit: number): Promise<IUser[]> {
    return await this.userRepository.find({
      skip: (page - 1) * limit,
      take: limit,
    });
  }
}
