import { Request, Response } from "express";
import * as service from "./service";
import { AuthResponse } from "../../types/types";

export const createRating = async (
  req: Request,
  res: Response<AuthResponse>
): Promise<void> => {
  try {
    const payload = req.body;
    const client_id = (req as any).userId;
    const data = await service.createRating({ ...payload, client_id });
    res.json({ data });
  } catch (err) {
    const errorMessage =
      err instanceof Error
        ? err.message
        : "An Error Occured while Rating This Lawyer";
    res.status(400).json({ error: { message: errorMessage } });
  }
};

export const getRatings = async (
  req: Request,
  res: Response<AuthResponse>
): Promise<void> => {
  try {
    const {userId,role} = req as any
    const data = await service.getRatings(userId,role);
    res.json({ data });
  } catch (err) {
    const errorMessage =
      err instanceof Error
        ? err.message
        : "An Error Occured while Fetching Ratings";
    res.status(400).json({ error: { message: errorMessage } });
  }
};

export const deleteRating = async (
  req: Request,
  res: Response<AuthResponse>
): Promise<void> => {
  try {
    const id = req.params.id;
    const data = await service.deleteRating(id);
    res.json({ data });
  } catch (err) {
    const errorMessage =
      err instanceof Error
        ? err.message
        : "An Error Occured while deleting Rating";
    res.status(400).json({ error: { message: errorMessage } });
  }
};
