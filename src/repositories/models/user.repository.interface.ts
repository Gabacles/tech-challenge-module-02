import { IUser } from "@/entities/models/user.interface";

export interface IUserRepository {
  createUser(user: IUser): Promise<IUser>;
}
