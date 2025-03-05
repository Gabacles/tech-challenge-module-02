import { makeCreatePostUseCase } from "@/useCases/factory/make-create-post-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function create(req: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    title: z.string(),
    content: z.string(),
  });

  const registerTokenSchema = z.object({
    id: z.string(),
  });

  const { id } = registerTokenSchema.parse(req.user);

  const { title, content } = registerBodySchema.parse(req.body);

  const createPostUseCase = makeCreatePostUseCase();

  const post = await createPostUseCase.handler({
    title,
    content,
    author_id: id,
  });

  return reply.code(201).send({ id: post?.id, title: post?.title });
}
