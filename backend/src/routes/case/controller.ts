import { Request, Response } from "express";
import * as service from "./service";
import { AuthResponse } from "../../types/types";

export const createcase = async (
  req: Request,
  res: Response<AuthResponse>
): Promise<void> => {
    try {
      const lawyer_id = (req as any).userId;

      console.log(lawyer_id)

      const data = await service.createCase({ ...req.body, lawyer: { lawyer_id } })
      res.json({ data })
    } catch(err) {
        const errorMessage =
      err instanceof Error
        ? err.message
        : "An Error Occured while creating case";
    res.status(400).json({ error: { message: errorMessage } });
    }
}


export const getCases = async (
  req: Request,
  res: Response<AuthResponse>
): Promise<void> => {
  try {
    const userId = (req as any).userId;
    const role = (req as any).role;
    const data = await service.getCases(userId,role )
    res.json({ data })
  } catch(err) {
      const errorMessage =
    err instanceof Error
      ? err.message
      : "An Error Occured while fetching cases";
  res.status(400).json({ error: { message: errorMessage } });
  }
}