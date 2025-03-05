import "reflect-metadata";
import "@/lib/typeorm/typeorm";
import fastify from "fastify";
import { globalErrorHandler } from "./utils/global-error-handler";

import { userRoutes } from "./http/controllers/user/routes";
import { postRoutes } from "./http/controllers/post/routes";
import fastifyJwt from "@fastify/jwt";
import { env } from "./env";
import { jwtValidate } from "./http/controllers/middlewares/jwt-validate";

export const app = fastify();

app.register(fastifyJwt, {
  secret: env.JWT_SECRET,
  sign: {
    expiresIn: "30m",
  },
});

app.addHook("onRequest", jwtValidate);

app.register(userRoutes);
app.register(postRoutes);

app.setErrorHandler(globalErrorHandler);
