import { FastifyInstance } from "fastify";
import { authorizeRole } from "../middlewares/authorizeRole";

import { UserRole } from "@/entities/models/userRoles.enum";

import { create } from "./create";
import { findAllPosts } from "./find-all-posts";
import { findPost } from "./find-post";
import { updatePost } from "./update";
import { deletePost } from "./delete";

export async function postRoutes(app: FastifyInstance) {
  app.post("/post", { preHandler: [authorizeRole(UserRole.TEACHER)] }, create);
  app.get("/post", findAllPosts);
  app.get("/post/:id", findPost);
  app.put(
    "/post/:id",
    { preHandler: [authorizeRole(UserRole.TEACHER)] },
    updatePost
  );
  app.delete(
    "/post/:id",
    { preHandler: [authorizeRole(UserRole.TEACHER)] },
    deletePost
  );
}
