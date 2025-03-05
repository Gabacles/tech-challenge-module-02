import { makeUpdatePostUseCase } from "@/useCases/factory/make-update-post";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function updatePost(req: FastifyRequest, res: FastifyReply) {
  const registerParamsSchema = z.object({
    id: z.coerce.string(),
  });

  const registerBodySchema = z.object({
    title: z.string(),
    content: z.string(),
    author_id: z.string(),
  });

  const { id } = registerParamsSchema.parse(req.params);

  const { title, content, author_id } = registerBodySchema.parse(req.body);

  const updatePostUseCase = makeUpdatePostUseCase();

  const post = await updatePostUseCase.handler({
    id,
    title,
    content,
    author_id,
  });

  return res.code(200).send(post);
}
