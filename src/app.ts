import "reflect-metadata";
import "@/lib/typeorm/typeorm";
import fastify from "fastify";
import { globalErrorHandler } from "./utils/global-error-handler";

import { userRoutes } from "./http/controllers/user/routes";
import { postRoutes } from "./http/controllers/post/routes";

export const app = fastify();

app.register(userRoutes);
app.register(postRoutes);

app.setErrorHandler(globalErrorHandler);
