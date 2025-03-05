import { makeDeletePostUseCase } from "@/useCases/factory/make-delete-post-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function deletePost(req: FastifyRequest, reply: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  });

  const { id } = registerParamsSchema.parse(req.params);

  const deletePostUseCase = makeDeletePostUseCase();

  await deletePostUseCase.handler(id);

  return reply.code(204).send();
}
