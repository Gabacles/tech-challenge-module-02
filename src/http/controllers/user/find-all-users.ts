import { makeFindAllUsersUseCase } from "@/useCases/factory/make-find-all-users-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function findAllUsers(req: FastifyRequest, reply: FastifyReply) {
  const registerQuerySchema = z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10),
  });

  const { page, limit } = registerQuerySchema.parse(req.query);

  const findAllUsersUseCase = makeFindAllUsersUseCase();

  const users = await findAllUsersUseCase.handler(page, limit);

  return reply.code(200).send(users);
}
