import "reflect-metadata";
import "@/lib/typeorm/typeorm";
import fastify from "fastify";

import { userRoutes } from "./http/controllers/user/routes";

export const app = fastify();

app.register(userRoutes);
