import db from "../utils/db.server";
import { MetricSnapshot } from "@prisma/client";

class MetricSnapshotRepository {
  public static async getAll(): Promise<MetricSnapshot[]> {
    const metricSnapshots = await db.metricSnapshot.findMany();
    return metricSnapshots;
  }

  public static async getById(id: string): Promise<MetricSnapshot | null> {
    const metricSnapshot = await db.metricSnapshot.findUnique({
      where: {
        id,
      },
    });
    return metricSnapshot;
  }

  public static async getByMetricId(
    metricId: string
  ): Promise<MetricSnapshot[]> {
    const metricSnapshots = await db.metricSnapshot.findMany({
      where: {
        metricId,
      },
    });
    return metricSnapshots;
  }

  public static async getByCompanyId(
    companyId: string
  ): Promise<MetricSnapshot[]> {
    const metricSnapshots = await db.metricSnapshot.findMany({
      where: {
        companyId,
      },
    });
    return metricSnapshots;
  }

  public static async create(
    metricSnapshot: MetricSnapshot
  ): Promise<MetricSnapshot> {
    const newMetricSnapshot = await db.metricSnapshot.create({
      data: {
        metricId: metricSnapshot.metricId,
        companyId: metricSnapshot.companyId,
        value: metricSnapshot.value,
        capturedAt: metricSnapshot.capturedAt,
      },
    });
    return newMetricSnapshot;
  }

  public static async update(
    id: string,
    metricSnapshot: MetricSnapshot
  ): Promise<MetricSnapshot | null> {
    const updatedMetricSnapshot = await db.metricSnapshot.update({
      where: {
        id,
      },
      data: {
        metricId: metricSnapshot.metricId,
        companyId: metricSnapshot.companyId,
        value: metricSnapshot.value,
        capturedAt: metricSnapshot.capturedAt,
      },
    });
    return updatedMetricSnapshot;
  }

  public static async delete(id: string): Promise<MetricSnapshot | null> {
    const deletedMetricSnapshot = await db.metricSnapshot.delete({
      where: {
        id,
      },
    });
    return deletedMetricSnapshot;
  }
}

export default MetricSnapshotRepository;
