import prisma from "../../lib/prisma";
import { ServiceType } from "../../types/types";

export const createService = async (payload: ServiceType) => {
  try {
    // Validate input
    if (
      !payload.title ||
      !payload.description ||
      !payload.category ||
      typeof payload.price !== "number"
    ) {
      throw new Error(
        "Invalid input. All fields are required, and price must be a number."
      );
    }

    // Create the service
    const newService = await prisma.services.create({
      data: {
        title: payload.title,
        description: payload.description,
        category: payload.category,
        price: payload.price,
        Lawyers: {
          connect: { id: payload.userId }, // Associate the service with the logged-in lawyer
        },
      },
    });

    return newService;
  } catch (err) {
    console.error("Error creating service:", err);
    throw err;
  }
};

export const fetchServices = async () => {
  try {
    const services = await prisma.services.findMany({
      select: {
        id: true,
        title: true,
        description: true,
        category: true,
        price: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return services;
  } catch (err) {
    console.error("Error fetching Services :", err);
    throw err;
  }
};

export const fetchLawyerServices = async (id: string) => {
  try {
    const services = await prisma.lawyer.findUnique({
      where: {
        id: id,
      },
      select: {
        services: true,
      },
    });
    return services;
  } catch (err) {
    console.error("Error fetching Services :", err);
    throw err;
  }
};

export const fetchService = async (id: string) => {
  try {
    const service = await prisma.services.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        title: true,
        description: true,
        category: true,
        price: true,
        createdAt: true,
        updatedAt: true,
        Lawyers: true,
      },
    });
    return service;
  } catch (err) {
    console.error("Error fetching Service :", err);
    throw err;
  }
};
