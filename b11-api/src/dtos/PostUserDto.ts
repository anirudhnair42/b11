import { User } from "@prisma/client";
import { Role } from "@prisma/client";

export type postUserDto = Pick<
  User,
  "email" | "password" | "firstName" | "lastName" | "permissions"
>;
