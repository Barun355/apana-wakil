import prisma from "../../lib/prisma";
import { Role } from "../../types/types";

export const fetchLawyers = async () => {
  try {
    const lawyers = await prisma.lawyer.findMany({
      select: {
        id: true,
        yoe: true,
        Ratings: {
          select:{
            rating:true,                        
          }
        },
        specialization: true,
        consultationFee: true,
        user: {
          select: {
            firstName: true,
            lastName: true,
          },
        },
      },
    });
    return lawyers;
  } catch (err) {
    throw err;
  }
};

export const fetchLawyer = async (id: string, role: Role, userId: string) => {
  try {
    const lawyer = await prisma.lawyer.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        profile_description: true,
        website: true,
        yoe: true,
        specialization: true,
        consultationFee: true,
        createdAt: true,
        updatedAt: true,        
        user: {
          select: {
            firstName: true,
            lastName: true,
            email: true,
            address: true,
          },
        },
      },
    });
    return lawyer;
  } catch (err) {
    throw err;
  }
};
