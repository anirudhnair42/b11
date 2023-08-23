import {
  JsonController,
  UseBefore,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  Req,
  Res,
  HttpError,
} from "routing-controllers";
import { Role } from "@prisma/client";
import { postUserDto } from "../dtos/PostUserDto";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import UserRepository from "../repositories/UserRepository";
import { User } from "@prisma/client";

@JsonController("/api")
// @UseBefore(AuthenticationMiddleware)
export class UserController {
  @Get("/users")
  getAll() {
    return UserRepository.getAll();
  }

  @Get("/users/:id")
  getOne(@Param("id") id: string) {
    return UserRepository.getById(id);
  }

  @Post("/login")
  async login(@Body({ required: true }) user: postUserDto) {
    if (!user.email || !user.password) {
      throw new HttpError(400, "Email and password are required");
    }

    const foundUser = await UserRepository.getByEmail(user.email);

    if (!foundUser) {
      throw new HttpError(404, "User not found");
    }

    const isPasswordValid = bcrypt.compareSync(
      user.password,
      foundUser.password
    );

    if (!isPasswordValid) {
      throw new HttpError(400, "Invalid password");
    }

    const token = jwt.sign(
      { userId: foundUser.id },
      process.env.SECRET_KEY ?? "",
      { expiresIn: "7h" }
    );

    return { message: "User logged in successfully", token, foundUser };
  }

  @Post("/register")
  async post(@Body({ required: true }) user: postUserDto) {
    if (!user.password) {
      throw new HttpError(400, "Password is required");
    }

    try {
      user.password = bcrypt.hashSync(user.password, 10);
      const newUser = await UserRepository.create(user);
      return newUser;
    } catch (err) {
      throw new HttpError(400, "Unable to create user");
    }
  }
}
