import { makeFindPostByIdUseCase } from "@/useCases/factory/make-find-post-by-id-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function findPost(req: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  });

  const { id } = registerParamsSchema.parse(req.params);

  const findPostByIdUseCase = makeFindPostByIdUseCase();

  const post = await findPostByIdUseCase.handler(id);

  return reply.code(200).send(post);
}
