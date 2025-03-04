import { IPost } from "./post.interface";
import { UserRole } from "./userRoles.enum";

export interface IUser {
  id?: string;
  name: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  posts?: IPost[];
}
