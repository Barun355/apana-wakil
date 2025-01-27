import {
  CASE_STATUS,
  CaseType,
  HearingType,
  TimelineType,
} from "../../types/types";
import prisma from "../../lib/prisma";
import { Role } from "@prisma/client";

export const createCase = async (payload: CaseType) => {
  try {

    // console.log(client, payload)
    const client = await prisma.users.findUnique({
      where: {
        email: payload.client.email
      },
      select: {
        id: true
      }
    })

    if(!client){
      throw new Error('Client not found')
    }
    console.log(payload)
    var cases = await prisma.cases.create({
      data: {
          CaseLawyer:{
            create:{
              lawyer:{
                connect:{
                  id:payload.lawyer.lawyer_id
                }
              }
            }
          },
          client_id: client?.id,
          lawyer_id: payload.lawyer.lawyer_id,
          title: payload.title,
          description: payload.description || '',
          status: payload.status,
          win: false,
          Hearings: payload.hearings.length > 0 ? {
            // connect: {
            //   client: {id: client?.id},
            // },
            create: {
              status: payload.hearings[0].status,
              client_id: client.id,
              lawyer_id: payload.hearings[0].lawyer_id,
            }
          }: undefined,
          Timeline: payload.timeline.length > 0 ? {
            create: {
              status: payload.timeline[0].status,
              lawyer_id: payload.hearings[0].lawyer_id,
              client_id: client.id,
              description: payload.timeline[0].description,
              title: payload.timeline[0].title,
              
            }
          }: undefined
      },select:{
        client:{
          select:{
            firstName:true,
            lastName:true,
            email:true,
            phone_number:true,
            address:true,
            id:true
          }
        },
        description:true,
        Hearings:{
          select:{
            createdAt:true,
            updatedAt:true,
            status:true, 
            id:true                         
          }
        },
        status:true,
        Timeline:{
          select:{
            status:true,
            title:true,
            description:true,
            createdAt:true,
            updatedAt:true,
            id:true,              
          }
        },
        title:true,
        win:true,
        id:true,
        CaseLawyer:{
          select:{
            lawyer:{
              select:{
                id:true,
                user:{
                  select:{
                    firstName:true,
                    lastName:true,
                    email:true,
                    phone_number:true,
                    address:true                      
                  }
                }
              }
            }
          }
        }
      }});

    if (!cases.id){
      throw Error('Case not created')
    }

    return cases
  } catch (err) {
    throw err;
  }
};


export const getCases = async (userId:string,role:Role)=>{
  try {
    let cases;
    if (role== Role.LAWYER){
      cases = await prisma.cases.findMany({
        select:{
          client:{
            select:{
              firstName:true,
              lastName:true,
              email:true,
              phone_number:true,
              address:true,
              id:true
            }
          },
          description:true,
          Hearings:{
            select:{
              createdAt:true,
              updatedAt:true,
              status:true, 
              id:true                         
            }
          },
          status:true,
          Timeline:{
            select:{
              status:true,
              title:true,
              description:true,
              createdAt:true,
              updatedAt:true,
              id:true,              
            }
          },
          title:true,
          win:true,
          id:true,
          CaseLawyer:{
            select:{
              lawyer:{
                select:{
                  id:true,
                  user:{
                    select:{
                      firstName:true,
                      lastName:true,
                      email:true,
                      phone_number:true,
                      address:true                      
                    }
                  }
                }
              }
            }
          }
        }
      })
    } else {
      cases = await prisma.cases.findMany({
        select:{
          description:true,
          Hearings:{
            select:{
              createdAt:true,
              updatedAt:true,
              status:true, 
              id:true                         
            }
          },
          status:true,
          Timeline:{
            select:{
              status:true,
              title:true,
              description:true,
              createdAt:true,
              updatedAt:true,
              id:true,              
            }
          },
          title:true,
          win:true,
          id:true,
          CaseLawyer:{
            select:{
              lawyer:{
                select:{
                  id:true,
                  user:{
                    select:{
                      firstName:true,
                      lastName:true,
                      email:true,
                      phone_number:true,
                      address:true                      
                    }
                  }
                }
              }
            }
          }
        }
      })
    }

    return cases
  } catch (err){
    throw err
  }
}