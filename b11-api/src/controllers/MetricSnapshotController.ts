import MetricSnapshotRepository from "../repositories/MetricSnapshotRepository";
import {
  JsonController,
  Get,
  Param,
  UseBefore,
  Post,
  Put,
  Body,
} from "routing-controllers";
import { MetricSnapshot } from "@prisma/client";
import { AuthenticationMiddleware } from "../middlewares/AuthenticationMiddleware";

@JsonController("/api")
@UseBefore(AuthenticationMiddleware)
export class MetricSnapshotController {
  @Get("/metricsnapshots")
  getAll(): Promise<MetricSnapshot[]> {
    return MetricSnapshotRepository.getAll();
  }

  @Get("/metricsnapshots/:id")
  getOne(@Param("id") id: string): Promise<MetricSnapshot | null> {
    return MetricSnapshotRepository.getById(id);
  }

  @Get("/metricsnapshots/metric/:metricId")
  getByMetricId(
    @Param("metricId") metricId: string
  ): Promise<MetricSnapshot[]> {
    return MetricSnapshotRepository.getByMetricId(metricId);
  }

  @Get("/metricsnapshots/company/:companyId")
  getByCompanyId(
    @Param("companyId") companyId: string
  ): Promise<MetricSnapshot[]> {
    return MetricSnapshotRepository.getByCompanyId(companyId);
  }

  @Post("/metricsnapshots")
  async post(@Body() metricSnapshot: MetricSnapshot): Promise<MetricSnapshot> {
    console.log("did we hit this?");
    return MetricSnapshotRepository.create(metricSnapshot);
  }

  @Put("/metricsnapshots/:id")
  async put(
    @Param("id") id: string,
    @Param("metricSnapshot") metricSnapshot: MetricSnapshot
  ): Promise<MetricSnapshot | null> {
    return MetricSnapshotRepository.update(id, metricSnapshot);
  }
}

export default MetricSnapshotController;
