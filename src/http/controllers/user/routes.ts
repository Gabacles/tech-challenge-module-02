import { FastifyInstance } from "fastify";
import { create } from "./create";
import { findUserById } from "./find-user";
import { findAllUsers } from "./find-all-users";
import { signin } from "./signin";

export async function userRoutes(app: FastifyInstance) {
  app.post("/user", create);
  app.get("/user/:id", findUserById);
  app.get("/user", findAllUsers);
  app.post("/user/signin", signin);
}
