import { postUserDto } from "dtos/PostUserDto";
import db from "../utils/db.server";
import { User, Role, Company } from "@prisma/client";

class UserRepository {
  public static async getById(id: string): Promise<User | null> {
    const user = await db.user.findUnique({
      where: {
        id,
      },
    });
    return user;
  }

  public static async getByEmail(email: string): Promise<User | null> {
    const user = await db.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return null;
    }
    return user;
  }

  public static async create(user: postUserDto): Promise<User> {
    const newUser = await db.user.create({
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        permissions: user.permissions,
      },
    });
    return newUser;
  }

  public static async update(
    id: string,
    user: postUserDto
  ): Promise<User | null> {
    const updatedUser = await db.user.update({
      where: {
        id,
      },
      data: {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        permissions: user.permissions,
      },
    });
    return updatedUser;
  }

  public static async delete(id: string): Promise<User | null> {
    const deletedUser = await db.user.delete({
      where: {
        id,
      },
    });
    return deletedUser;
  }

  public static async getAll(): Promise<User[]> {
    const users = await db.user.findMany();
    return users;
  }
}

export default UserRepository;
