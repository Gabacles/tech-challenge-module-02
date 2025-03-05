
import { FastifyReply, FastifyRequest } from "fastify";
import { env } from "process";
import { ZodError } from "zod";

interface ErrorHandlerMap {
  [key: string]: (
    error: Error,
    request: FastifyRequest,
    reply: FastifyReply
  ) => void;
}

export const errorHandlerMap: ErrorHandlerMap = {
  ResourceNotFoundError: (error, _, reply) => {
    reply.status(404).send({ message: error.message });
  },
  ZodError: (error, _, reply) => {
    reply.status(400).send({
      message: "Validation error",
      ...(error instanceof ZodError && { errors: error.format() }),
    });
  },
  invalidCredentialsError: (error, _, reply) => {
    reply.status(404).send({ message: error.message });
  },
  RoleNotAllowedError: (error, _, reply) => {
    reply.status(403).send({ message: error.message });
  },
};

export function globalErrorHandler(
  error: Error,
  request: FastifyRequest,
  reply: FastifyReply
) {
  if (env.NODE_ENV === "development") console.error(error);

  const errorName = error.constructor.name;

  console.log(errorName);

  const handler = errorHandlerMap[errorName];

  if (handler) return handler(error, request, reply);

  return reply.status(500).send({ message: error.message });
}
