import { Request, Response } from "express";
import * as service from "./service";
import { AuthResponse } from "../../types/types";

export const createService = async (
  req: Request,
  res: Response<AuthResponse>
): Promise<void> => {
  try {
    const { userId, role } = req as any;
    if (role == "CLIENT") {
      throw new Error("unAuthorized");
    }
    const data = await service.createService({ ...req.body, userId });

    res.json({ data });
  } catch (err) {
    const errorMessage =
      err instanceof Error
        ? err.message
        : "An Error Occured while Creating Service";
    res.status(400).json({ error: { message: errorMessage } });
  }
};

export const fetchServices = async (
  req: Request,
  res: Response<AuthResponse>
): Promise<void> => {
  try {
    const data = await service.fetchServices();
    res.json({ data });
  } catch (err) {
    const errorMessage =
      err instanceof Error
        ? err.message
        : "An Error Occured while Fetching Services";
    res.status(400).json({ error: { message: errorMessage } });
  }
};

export const fetchLawyerServices = async (
  req: Request,
  res: Response<AuthResponse>
): Promise<void> => {
  try {
    const data = await service.fetchLawyerServices(req.params.id);
    res.json({ data });
  } catch (err) {
    const errorMessage =
      err instanceof Error
        ? err.message
        : "An Error Occured while Fetching Services For This Lawyer";
    res.status(400).json({ error: { message: errorMessage } });
  }
};

export const fetchService = async (
  req: Request,
  res: Response<AuthResponse>
): Promise<void> => {
  try {
    const id = req.params.id;
    const data = await service.fetchService(id);
    res.json({ data });
  } catch (err) {
    const errorMessage =
      err instanceof Error
        ? err.message
        : "An Error Occured while Fetching Service";
    res.status(400).json({ error: { message: errorMessage } });
  }
};
