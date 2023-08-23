import IndustryRepository from "../repositories/IndustryRepository";
import {
  JsonController,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  OnUndefined,
  UseBefore,
} from "routing-controllers";
import { Industry } from "@prisma/client";
import { AuthenticationMiddleware } from "../middlewares/AuthenticationMiddleware";

@JsonController("/api")
@UseBefore(AuthenticationMiddleware)
export class IndustryController {
  @Get("/industries")
  getAll() {
    return IndustryRepository.getAll();
  }

  @Get("/industry/:id")
  getOne(@Param("id") id: string) {
    return IndustryRepository.getById(id);
  }

  @Post("/industry")
  @OnUndefined(400)
  async post(@Body() industry: Industry) {
    return IndustryRepository.create(industry);
  }

  @Put("/industry/:id")
  @OnUndefined(400)
  async put(@Param("id") id: string, @Body() industry: Industry) {
    return IndustryRepository.update(id, industry);
  }

  @Delete("/industry/:id")
  @OnUndefined(400)
  async delete(@Param("id") id: string) {
    return IndustryRepository.delete(id);
  }
}
