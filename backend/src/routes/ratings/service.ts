import prisma from "../../lib/prisma";
import { LawyerDetailsType, Rating, Role } from "../../types/types";

export const createRating = async (payload: Rating) => {
  try {
    // Ensure rating is within the valid range
    if (payload.rating < 1 || payload.rating > 5) {
      throw new Error("Rating must be between 1 and 5.");
    }

    // Check if lawyer exists (optional validation step)
    const lawyerExists = await prisma.lawyer.findUnique({
      where: { id: payload.lawyer_id },
    });

    if (!lawyerExists) {
      throw new Error("Lawyer not found.");
    }

    // Check if client exists
    const clientExists = await prisma.users.findUnique({
      where: { id: payload.client_id },
    });

    if (!clientExists) {
      throw new Error("Client not found.");
    }

    // Create rating with relationship
    const rating = await prisma.ratings.create({
      data: {
        lawyer: {
          connect: { id: payload.lawyer_id }, // Relate to lawyer
        },
        client: {
          connect: { id: payload.client_id },
        },
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


export const getRatings = async (userId:string,role:Role)=>{
  try {
    let ratings :Rating[];
    if(role==Role.LAWYER){
      ratings  = await prisma.ratings.findMany({
        where:{
          lawyer:{
              id:userId
          }
        },
        select:{
          rating:true,
          client_id:true,
          lawyer_id:true,
          description:true,
          id:true,
        }
      })
    } else {
      ratings  = await prisma.ratings.findMany({
        where:{
          client:{
              id:userId
          }
        },
        select:{
          rating:true,
          client_id:true,
          lawyer_id:true,
          description:true,
          id:true,
        }
      })
    }
    return ratings    
  } catch (err){
    throw err
  }
}
