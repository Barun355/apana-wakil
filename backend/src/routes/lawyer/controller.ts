import { Request, Response } from "express";
import * as service from "./service";
import { AuthResponse } from "../../types/types";

export const fetchLawyers = async (
  req: Request,
  res: Response<AuthResponse>
): Promise<void> => {
  try {
    const data = await service.fetchLawyers();
    res.json({ data });
  } catch (err) {
    const errorMessage =
      err instanceof Error
        ? err.message
        : "An Error Occured while Fetching Lawyers";
    res.status(400).json({ error: { message: errorMessage } });
  }
};

export const fetchLawyer = async (
  req: Request,
  res: Response<AuthResponse>
): Promise<void> => {
  try {
    const id = req.params.id;
    const data = await service.fetchLawyer(id);
    res.json({ data });
  } catch (err) {
    const errorMessage =
      err instanceof Error
        ? err.message
        : "An Error Occured while Fetching Lawyer";
    res.status(400).json({ error: { message: errorMessage } });
  }
};
