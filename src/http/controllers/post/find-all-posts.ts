import { makeFindAllPostsUseCase } from "@/useCases/factory/make-find-all-posts-use-case";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function findAllPosts(req: FastifyRequest, reply: FastifyReply) {
  const registerQuerySchema = z.object({
    page: z.coerce.number().default(1),
    limit: z.coerce.number().default(10),
    search: z.coerce.string().default(""),
  });

  const { page, limit, search } = registerQuerySchema.parse(req.query);

  const findAllPostsUseCase = makeFindAllPostsUseCase();

  const posts = await findAllPostsUseCase.handler(page, limit, search);

  return reply.status(200).send(posts);
}
