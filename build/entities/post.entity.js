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
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};

// src/entities/post.entity.ts
var post_entity_exports = {};
__export(post_entity_exports, {
  Post: () => Post
});
module.exports = __toCommonJS(post_entity_exports);
var import_typeorm2 = require("typeorm");

// src/entities/user.entity.ts
var import_typeorm = require("typeorm");

// src/entities/models/userRoles.enum.ts
var UserRole = /* @__PURE__ */ ((UserRole2) => {
  UserRole2["TEACHER"] = "TEACHER";
  UserRole2["STUDENT"] = "STUDENT";
  return UserRole2;
})(UserRole || {});

// src/entities/user.entity.ts
var User = class {
};
__decorateClass([
  (0, import_typeorm.PrimaryGeneratedColumn)("uuid", { name: "id" })
], User.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm.Column)({ name: "name", type: "text" })
], User.prototype, "name", 2);
__decorateClass([
  (0, import_typeorm.Column)({ name: "email", type: "text", unique: true })
], User.prototype, "email", 2);
__decorateClass([
  (0, import_typeorm.Column)({ type: "enum", enum: UserRole })
], User.prototype, "role", 2);
__decorateClass([
  (0, import_typeorm.Column)({ name: "password_hash", type: "text" })
], User.prototype, "passwordHash", 2);
__decorateClass([
  (0, import_typeorm.OneToMany)(() => Post, (post) => post.authorId)
], User.prototype, "posts", 2);
User = __decorateClass([
  (0, import_typeorm.Entity)({
    name: "user"
  })
], User);

// src/entities/post.entity.ts
var Post = class {
};
__decorateClass([
  (0, import_typeorm2.PrimaryGeneratedColumn)("uuid", { name: "id" })
], Post.prototype, "id", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ name: "title", type: "text" })
], Post.prototype, "title", 2);
__decorateClass([
  (0, import_typeorm2.Column)({ name: "content", type: "text" })
], Post.prototype, "content", 2);
__decorateClass([
  (0, import_typeorm2.ManyToOne)(() => User, (user) => user.posts, { onDelete: "CASCADE" })
], Post.prototype, "authorId", 2);
Post = __decorateClass([
  (0, import_typeorm2.Entity)({
    name: "post"
  })
], Post);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Post
});
