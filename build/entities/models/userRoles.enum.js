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

// src/entities/models/userRoles.enum.ts
var userRoles_enum_exports = {};
__export(userRoles_enum_exports, {
  UserRole: () => UserRole
});
module.exports = __toCommonJS(userRoles_enum_exports);
var UserRole = /* @__PURE__ */ ((UserRole2) => {
  UserRole2["TEACHER"] = "TEACHER";
  UserRole2["STUDENT"] = "STUDENT";
  return UserRole2;
})(UserRole || {});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  UserRole
});
