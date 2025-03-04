import { makeCreateUserUseCase } from "@/useCases/factory/make-create-user-use-case";
import { hash } from "bcryptjs";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { UserRole } from "@/entities/models/userRoles.enum";

export async function create(req: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string(),
    passwordHash: z.string(),
    roles: z.enum([UserRole.STUDENT, UserRole.TEACHER]),
  });

  const { name, email, passwordHash, roles } = registerBodySchema.parse(
    req.body
  );

  const hashedPassword = await hash(passwordHash, 10);

  const userWithHashedPassword = {
    name,
    email,
    passwordHash: hashedPassword,
    roles,
  };

  const createUserUseCase = makeCreateUserUseCase();

  const user = await createUserUseCase.handler(userWithHashedPassword);

  return reply.code(201).send({ id: user?.id, username: user?.email });
}
