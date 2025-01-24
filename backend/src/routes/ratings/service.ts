import prisma from "../../lib/prisma";
import { Rating } from "../../types/types";

export const createRating = async (payload: Rating) => {
  try {
    if (payload.rating < 1 || payload.rating > 5) {
      throw new Error("Rating must be between 1 and 5.");
    }
    const rating = await prisma.ratings.create({
      data: {
        lawyer_id: payload.lawyerId,
        client_id: payload.clientId,
        rating: payload.rating,
        description: payload.description,
      },
    });
    return rating;
  } catch (err) {
    throw err;
  }
};

export const deleteRating = async (id: string) => {
  try {
    // Check if the rating exists
    const existingRating = await prisma.ratings.findUnique({
      where: { id: id },
    });

    if (!existingRating) {
      throw new Error("Rating not found.");
    }

    // Delete the rating
    const deletedRating = await prisma.ratings.delete({
      where: { id: id },
    });

    return deletedRating;
  } catch (err) {
    throw err;
  }
};
