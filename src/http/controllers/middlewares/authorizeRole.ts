import { UserRole } from "@/entities/models/userRoles.enum";
import { IUser } from "@/entities/models/user.interface";

import { FastifyRequest } from "fastify";
import { RoleNotAllowedError } from "@/useCases/errors/role-not-allowed-error";

export function authorizeRole(requiredRole: UserRole) {
  return async (request: FastifyRequest) => {
    const user = request.user as IUser;

    if (user.roles !== requiredRole) {
      throw new RoleNotAllowedError();
    }
  };
}
