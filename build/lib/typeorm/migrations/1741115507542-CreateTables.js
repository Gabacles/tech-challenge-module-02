"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/lib/typeorm/migrations/1741115507542-CreateTables.ts
var CreateTables_exports = {};
__export(CreateTables_exports, {
  CreateTables1741115507542: () => CreateTables1741115507542
});
module.exports = __toCommonJS(CreateTables_exports);
var CreateTables1741115507542 = class {
  async up(queryRunner) {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp";`);
    await queryRunner.query(`
      CREATE TYPE "user_role_enum" AS ENUM ('STUDENT', 'TEACHER');
    `);
    await queryRunner.query(`
      CREATE TABLE "users" (
        "id" UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        "name" TEXT NOT NULL,
        "email" TEXT UNIQUE NOT NULL,
        "password_hash" TEXT NOT NULL,
        "roles" "user_role_enum" NOT NULL
      );
    `);
    await queryRunner.query(`
      CREATE TABLE "posts" (
        "id" UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        "title" TEXT NOT NULL,
        "content" TEXT NOT NULL,
        "author_id" UUID NOT NULL REFERENCES "users" ("id") ON DELETE CASCADE,
        "created_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        "updated_at" TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );
    `);
  }
  async down(queryRunner) {
    await queryRunner.query(`DROP TABLE "posts";`);
    await queryRunner.query(`DROP TABLE "users";`);
    await queryRunner.query(`DROP TYPE "user_role_enum";`);
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  CreateTables1741115507542
});
