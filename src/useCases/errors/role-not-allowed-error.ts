export class RoleNotAllowedError extends Error {
  constructor() {
    super("You don't have permission to access this resource");
  }
}
