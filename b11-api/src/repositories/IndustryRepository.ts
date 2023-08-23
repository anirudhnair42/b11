import db from "../utils/db.server";
import { Industry } from "@prisma/client";

class IndustryRepository {
  public static async getAll(): Promise<Industry[]> {
    const industries = await db.industry.findMany();
    return industries;
  }

  public static async getById(id: string): Promise<Industry | null> {
    const industry = await db.industry.findUnique({
      where: {
        id,
      },
    });
    return industry;
  }

  public static async create(industry: Industry): Promise<Industry> {
    const newIndustry = await db.industry.create({
      data: {
        name: industry.name,
      },
    });
    return newIndustry;
  }

  public static async update(
    id: string,
    industry: Industry
  ): Promise<Industry | null> {
    const updatedIndustry = await db.industry.update({
      where: {
        id,
      },
      data: {
        name: industry.name,
      },
    });
    return updatedIndustry;
  }

  public static async delete(id: string): Promise<Industry | null> {
    const deletedIndustry = await db.industry.delete({
      where: {
        id,
      },
    });
    return deletedIndustry;
  }

  public static async getCompanies(id: string): Promise<Industry | null> {
    const industry = await db.industry.findUnique({
      where: {
        id,
      },
      include: {
        companies: true,
      },
    });
    return industry;
  }
}

export default IndustryRepository;
