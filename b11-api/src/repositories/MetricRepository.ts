import db from "../utils/db.server";
import { Metric } from "@prisma/client";

class MetricsRepository {
  public static async getAll(): Promise<Metric[]> {
    const metrics = await db.metric.findMany();
    return metrics;
  }

  public static async getById(id: string): Promise<Metric | null> {
    const metric = await db.metric.findUnique({
      where: {
        id,
      },
    });
    return metric;
  }

  public static async create(metric: Metric): Promise<Metric> {
    const newMetric = await db.metric.create({
      data: {
        name: metric.name,
        description: metric.description,
        type: metric.type,
      },
    });
    return newMetric;
  }

  public static async update(
    id: string,
    metric: Metric
  ): Promise<Metric | null> {
    const updatedMetric = await db.metric.update({
      where: {
        id,
      },
      data: {
        name: metric.name,
        description: metric.description,
        type: metric.type,
      },
    });
    return updatedMetric;
  }

  public static async delete(id: string): Promise<Metric | null> {
    const deletedMetric = await db.metric.delete({
      where: {
        id,
      },
    });
    return deletedMetric;
  }
}

export default MetricsRepository;
