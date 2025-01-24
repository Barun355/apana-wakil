import { Request, Response } from "express";
import * as service from "./service";
import { AuthResponse } from "../../types/types";

export const createRating = async (
  req: Request,
  res: Response<AuthResponse>
): Promise<void> => {
  try {
    const payload = req.body;
    const clientId = (req as any).userId;
    const data = await service.createRating({ ...payload, clientId });
    res.json({ data });
  } catch (err) {
    const errorMessage =
      err instanceof Error
        ? err.message
        : "An Error Occured while Rating This Lawyer";
    res.status(400).json({ error: { message: errorMessage } });
  }
};

export const deleteRating = async (
  req: Request,
  res: Response<AuthResponse>
): Promise<void> => {
  try {
    const { id } = req.body;
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
