import db from "utils/db.server";
import { BussinessModel } from "@prisma/client";

class BussinessModelRepository {
  public static async getAll(): Promise<BussinessModel[]> {
    const bussinessModels = await db.bussinessModel.findMany();
    return bussinessModels;
  }

  public static async getById(id: string): Promise<BussinessModel | null> {
    const bussinessModel = await db.bussinessModel.findUnique({
      where: {
        id,
      },
    });
    return bussinessModel;
  }

  public static async create(
    bussinessModel: BussinessModel
  ): Promise<BussinessModel> {
    const newBussinessModel = await db.bussinessModel.create({
      data: {
        name: bussinessModel.name,
      },
    });
    return newBussinessModel;
  }

  public static async update(
    id: string,
    bussinessModel: BussinessModel
  ): Promise<BussinessModel | null> {
    const updatedBussinessModel = await db.bussinessModel.update({
      where: {
        id,
      },
      data: {
        name: bussinessModel.name,
      },
    });
    return updatedBussinessModel;
  }

  public static async delete(id: string): Promise<BussinessModel | null> {
    const deletedBussinessModel = await db.bussinessModel.delete({
      where: {
        id,
      },
    });
    return deletedBussinessModel;
  }

  public static async getCompanies(id: string): Promise<BussinessModel | null> {
    const bussinessModel = await db.bussinessModel.findUnique({
      where: {
        id,
      },
      include: {
        companies: true,
      },
    });
    return bussinessModel;
  }
}

export default BussinessModelRepository;
