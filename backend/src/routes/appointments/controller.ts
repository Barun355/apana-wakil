import { Request, Response } from "express";
import * as service from "./service";
import { AuthResponse } from "../../types/types";

export const createAppointment = async (
  req: Request,
  res: Response<AuthResponse>
): Promise<void> => {
  try {
    const client_id = (req as any).userId;
    const data = await service.createAppointment({ ...req.body, client_id });
    res.json({ data });
  } catch (err) {
    const errorMessage =
      err instanceof Error
        ? err.message
        : "An Error Occured while creating appointment";
    res.status(400).json({ error: { message: errorMessage } });
  }
};

export const updateAppointment = async (
  req: Request,
  res: Response<AuthResponse>
): Promise<void> => {
  try {
    const userId = (req as any).userId;
    const role = (req as any).role;
    console.log('controller 29: ',role)
    const data = await service.updateAppointment({ ...req.body, role, userId });
    res.json({ data });
  } catch (err) {
    const errorMessage =
      err instanceof Error
        ? err.message
        : "An Error Occured while updating status";
    res.status(400).json({ error: { message: errorMessage } });
  }
};


export const getAppointments = async (
    req: Request,
    res: Response<AuthResponse>
  ): Promise<void> => {
    try {
      const userId = (req as any).userId;
      const role = (req as any).role;
      const data = await service.getAppointments({ userId,role });
      res.json({ data });
    } catch (err) {
      const errorMessage =
        err instanceof Error
          ? err.message
          : "An Error Occured while fetching appointments";
      res.status(400).json({ error: { message: errorMessage } });
    }
  };