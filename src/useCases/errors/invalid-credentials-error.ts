export class invalidCredentialsError extends Error {
  constructor() {
    super("username or password is incorrect");
  }
}
