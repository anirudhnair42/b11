import LocationRepository from "../repositories/LocationRepository";
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
import { Location } from "@prisma/client";
import { AuthenticationMiddleware } from "../middlewares/AuthenticationMiddleware";

@JsonController("/api")
@UseBefore(AuthenticationMiddleware)
export class LocationController {
  @Get("/locations")
  getAll() {
    return LocationRepository.getAll();
  }

  @Get("/location/:id")
  getOne(@Param("id") id: string) {
    return LocationRepository.getById(id);
  }

  @Post("/location")
  @OnUndefined(400)
  async post(@Body() location: Location) {
    return LocationRepository.create(location);
  }

  @Put("/location/:id")
  @OnUndefined(400)
  async put(@Param("id") id: string, @Body() location: Location) {
    return LocationRepository.update(id, location);
  }

  @Delete("/location/:id")
  @OnUndefined(400)
  async delete(@Param("id") id: string) {
    return LocationRepository.delete(id);
  }
}
