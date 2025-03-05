import { IUser } from "@/entities/models/user.interface";

export interface IUserRepository {
  createUser(user: IUser): Promise<IUser>;
  findUserById(id: string): Promise<IUser | null>;
  findAllUsers(page: number, limit: number): Promise<IUser[]>;
  findUserByEmail(email: string): Promise<IUser | null>;
}
