import db from "../utils/db.server";
import { Company } from "@prisma/client";

class CompanyRepository {
  public static async getAll(): Promise<Company[]> {
    const companies = await db.company.findMany();
    return companies;
  }

  public static async getById(id: string): Promise<Company | null> {
    const company = await db.company.findUnique({
      where: {
        id,
      },
    });
    return company;
  }

  public static async create(company: Company): Promise<Company> {
    const newCompany = await db.company.create({
      data: {
        name: company.name,
        description: company.description,
        logo: company.logo,
        locationId: company.locationId,
        industryId: company.industryId,
        website: company.website,
      },
    });
    return newCompany;
  }

  public static async update(
    id: string,
    company: Company
  ): Promise<Company | null> {
    const updatedCompany = await db.company.update({
      where: {
        id,
      },
      data: {
        name: company.name,
        description: company.description,
        logo: company.logo,
        locationId: company.locationId,
        industryId: company.industryId,
        website: company.website,
      },
    });
    return updatedCompany;
  }

  public static async delete(id: string): Promise<Company | null> {
    const deletedCompany = await db.company.delete({
      where: {
        id,
      },
    });
    return deletedCompany;
  }
}

export default CompanyRepository;
