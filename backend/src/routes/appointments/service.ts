import { APPOINTMENT_STATUS } from "@prisma/client";
import prisma from "../../lib/prisma";
import { AppointmentsType, Role } from "../../types/types";

export const createAppointment = async (payload: AppointmentsType) => {
  try {
    const appointment = await prisma.appointments.create({
      data: {
        date: new Date(payload.date),
        description: payload.description,
        status: APPOINTMENT_STATUS.PENDING,
        client_id: payload.client_id ? payload.client_id : "",
        lawyer_id: payload.lawyer_id ? payload.lawyer_id : "",
      },
      select: {
        id: true,
        date: true,
        description: true,
        lawyer_id: true,
        status: true,
        createdAt: true,
        updatedAt: true,
        client_id:true,
        lawyer:{
          select:{
            user:{
              select:{
                firstName:true,
                lastName:true,
                email:true,
                phone_number:true
              }
            }
          }
        },
      },
    });
    return appointment;
  } catch (err) {
    throw err;
  }
};

export const getAppointments = async (payload:{userId:string,role:string})=>{
  try {
    let appointments
    if(payload.role===Role.LAWYER){
      appointments = prisma.appointments.findMany({
        where:{
          lawyer:{
            id:payload.userId
          }
        }, select:{
          id: true,
          date: true,
          description: true,
          lawyer_id: true,
          status: true,
          createdAt: true,
          updatedAt: true,
          client_id: true,
          client:{
            select:{
              firstName:true,
              lastName:true,
              email:true,
              phone_number:true
            }
          }
        }
      })
    } else {
      appointments = prisma.appointments.findMany({
        where:{
          client:{
            id:payload.userId
          }
        }, select:{
          id: true,
          date: true,
          description: true,
          lawyer_id: true,
          lawyer:{
            select:{
              user:{
                select:{
                  firstName:true,
                  lastName:true,
                  email:true,
                  phone_number:true
                }
              }
            }
          },
          status: true,
          createdAt: true,
          updatedAt: true,
          client_id:true,
        }
      })
    }
    return appointments
  } catch (err){
    throw err
  }
}

export const updateAppointment = async (payload: AppointmentsType) => {
  try {
    // Handle update logic based on the role
    console.log(payload.role)
    if (payload.role === Role.LAWYER) {
      // Lawyers can update any appointments they own
      const appointment = await prisma.appointments.update({
        where: {
          id: payload.id,
          lawyer:{
            id:payload.userId
          }
        },
        data: {
          status:payload.status,
          date:payload.date
        },
        select:{
          id: true,
          date: true,
          description: true,
          lawyer_id: true,
          status: true,
          createdAt: true,
          updatedAt: true,
          client_id: true,
          client:{
            select:{
              firstName:true,
              lastName:true,
              email:true,
              phone_number:true
            }
          }
        }
      });
      return appointment;
    } else if (payload.role === Role.CLIENT) {
      // Users can only update their own appointments
      const appointment = await prisma.appointments.update({
        where: {
          id: payload.id,
          client:{
            id:payload.userId
          }
        },
        data: {
          description: payload.description, // Users can only update description
          date: payload.date,
          status:payload.status // Users can update the appointment date if needed
        },select:{
          id: true,
          date: true,
          description: true,
          lawyer_id: true,
          lawyer:{
            select:{
              user:{
                select:{
                  firstName:true,
                  lastName:true,
                  email:true,
                  phone_number:true
                }
              }
            }
          },
          status: true,
          createdAt: true,
          updatedAt: true,
          client_id:true,
        }    
      });
      return appointment;
    } else {
      throw new Error("Invalid role.");
    }
  } catch (err) {
    throw err;
  }
};
