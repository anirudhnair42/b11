import CompanyRepository from "../repositories/CompanyRepository";
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
import { Company } from "@prisma/client";
import { AuthenticationMiddleware } from "../middlewares/AuthenticationMiddleware";

@JsonController("/api")
@UseBefore(AuthenticationMiddleware)
export class CompanyController {
  @Get("/companies")
  getAll() {
    return CompanyRepository.getAll();
  }

  @Get("/companies/:id")
  getOne(@Param("id") id: string) {
    return CompanyRepository.getById(id);
  }

  @Post("/companies")
  @OnUndefined(400)
  async post(@Body() company: Company) {
    return CompanyRepository.create(company);
  }

  @Put("/companies/:id")
  @OnUndefined(400)
  async put(@Param("id") id: string, @Body() company: Company) {
    return CompanyRepository.update(id, company);
  }

  @Delete("/companies/:id")
  @OnUndefined(400)
  async delete(@Param("id") id: string) {
    return CompanyRepository.delete(id);
  }
}
