import db from "../utils/db.server";
import { Location } from "@prisma/client";

class LocationRepository {
  public static async getAll(): Promise<Location[]> {
    const locations = await db.location.findMany();
    return locations;
  }

  public static async getById(id: string): Promise<Location | null> {
    const location = await db.location.findUnique({
      where: {
        id,
      },
    });
    return location;
  }

  public static async create(location: Location): Promise<Location> {
    const newLocation = await db.location.create({
      data: {
        name: location.name,
        state: location.state,
        country: location.country,
        pincode: location.pincode,
      },
    });
    return newLocation;
  }

  public static async update(
    id: string,
    location: Location
  ): Promise<Location | null> {
    const updatedLocation = await db.location.update({
      where: {
        id,
      },
      data: {
        name: location.name,
        state: location.state,
        country: location.country,
        pincode: location.pincode,
      },
    });
    return updatedLocation;
  }

  public static async delete(id: string): Promise<Location | null> {
    const deletedLocation = await db.location.delete({
      where: {
        id,
      },
    });
    return deletedLocation;
  }

  public static async getCompanies(id: string): Promise<Location | null> {
    const location = await db.location.findUnique({
      where: {
        id,
      },
      include: {
        companies: true,
      },
    });
    return location;
  }
}

export default LocationRepository;
