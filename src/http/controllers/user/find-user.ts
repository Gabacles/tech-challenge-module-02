import { makeFindUserByIdUseCase } from "@/useCases/factory/make-find-user-by-id-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function findUserById(req: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  });

  const { id } = registerParamsSchema.parse(req.params);

  const findUserByIdUseCase = makeFindUserByIdUseCase();

  const user = await findUserByIdUseCase.handler(id);

  return reply
    .code(200)
    .send({
      id: user?.id,
      name: user?.name,
      email: user?.email,
      posts: user?.posts,
    });
}
