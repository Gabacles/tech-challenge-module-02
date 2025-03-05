import { invalidCredentialsError } from "@/useCases/errors/invalid-credentials-error";
import { makeSigninUseCase } from "@/useCases/factory/make-signin-use-case";
import { compare } from "bcryptjs";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";

export async function signin(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    email: z.string(),
    password: z.string(),
  });

  const { email, password } = registerBodySchema.parse(request.body);

  const signinUseCase = makeSigninUseCase();

  const user = await signinUseCase.handler(email);

  const doestPasswordMatch = await compare(password, user.passwordHash);

  if (!doestPasswordMatch) {
    throw new invalidCredentialsError();
  }

  const token = await reply.jwtSign({ email, id: user.id, roles: user.roles });

  return reply.status(200).send({ token });
}
