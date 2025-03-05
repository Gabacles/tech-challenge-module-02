import { UserRepository } from "@/repositories/user.repository";
import { SigninUseCase } from "../signin";

export function makeSigninUseCase() {
  const userRepository = new UserRepository();
  const signinUseCase = new SigninUseCase(userRepository);

  return signinUseCase;
}
