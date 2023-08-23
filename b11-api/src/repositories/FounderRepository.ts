import db from "utils/db.server";
import { Founder } from "@prisma/client";

class FounderRepository {
  public static async getAll(): Promise<Founder[]> {
    const founders = await db.founder.findMany();
    return founders;
  }

  public static async getById(id: string): Promise<Founder | null> {
    const founder = await db.founder.findUnique({
      where: {
        id,
      },
    });
    return founder;
  }

  public static async create(founder: Founder): Promise<Founder> {
    const newFounder = await db.founder.create({
      data: {
        name: founder.name,
        email: founder.email,
        contact: founder.contact,
        Linkedin: founder.Linkedin,
        twitter: founder.twitter,
        website: founder.website,
        crunchbase: founder.crunchbase,
        company: {
          connect: {
            id: founder.companyId,
          },
        },
      },
    });
    return newFounder;
  }

  public static async update(
    id: string,
    founder: Founder
  ): Promise<Founder | null> {
    const updatedFounder = await db.founder.update({
      where: {
        id,
      },
      data: {
        name: founder.name,
        email: founder.email,
        contact: founder.contact,
        Linkedin: founder.Linkedin,
        twitter: founder.twitter,
        website: founder.website,
        crunchbase: founder.crunchbase,
      },
    });
    return updatedFounder;
  }

  public static async delete(id: string): Promise<Founder | null> {
    const deletedFounder = await db.founder.delete({
      where: {
        id,
      },
    });
    return deletedFounder;
  }

  public static async getCompany(id: string): Promise<Founder | null> {
    const founder = await db.founder.findUnique({
      where: {
        id,
      },
      include: {
        company: true,
      },
    });
    return founder;
  }
}

export default FounderRepository;
