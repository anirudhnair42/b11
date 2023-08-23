import MetricsRepository from "../repositories/MetricRepository";
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
import { Metric } from "@prisma/client";
import { AuthenticationMiddleware } from "../middlewares/AuthenticationMiddleware";

@JsonController("/api")
@UseBefore(AuthenticationMiddleware)
export class MetricsController {
  @Get("/metrics")
  getAll() {
    return MetricsRepository.getAll();
  }

  @Get("/metric/:id")
  getOne(@Param("id") id: string) {
    return MetricsRepository.getById(id);
  }

  @Post("/metric")
  @OnUndefined(400)
  async post(@Body() metric: Metric) {
    return MetricsRepository.create(metric);
  }

  @Put("/metric/:id")
  @OnUndefined(400)
  async put(@Param("id") id: string, @Body() metric: Metric) {
    return MetricsRepository.update(id, metric);
  }

  @Delete("/metric/:id")
  @OnUndefined(400)
  async delete(@Param("id") id: string) {
    return MetricsRepository.delete(id);
  }
}

export default MetricsController;
