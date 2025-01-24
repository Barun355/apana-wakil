import prisma from "../../lib/prisma";

export const fetchLawyers = async () => {
  try {
    const lawyers = await prisma.lawyer.findMany({
      select: {
        id: true,
        yoe: true,
        Ratings: true,
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

export const fetchLawyer = async (id: string) => {
  try {
    const lawyer = await prisma.lawyer.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        yoe: true,
        Ratings: true,
        specialization: true,
        consultationFee: true,
        createdAt: true,
        updatedAt: true,
        services: {
          select: {
            id: true,
            category: true,
            description: true,
            title: true,
            price: true,
          },
        },
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
