import { Request, Response } from "express";
import * as service from "./service";
import { AuthResponse } from "../../types/types";
import { getGoogleAuthUser } from "./IDP";

export const signup = async (
  req: Request,
  res: Response<AuthResponse>
): Promise<void> => {
  try {
    const data = await service.signup(req.body);
    res.json({ data });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Signup Failed";
    res.status(400).json({ error: { message: errorMessage } });
  }
};

export const signin = async (
  req: Request,
  res: Response<AuthResponse>
): Promise<void> => {
  try {
    if (!req.body.role) {
      throw new Error("Define Role of the User");
    }
    const data = await service.signin(req.body);
    res.json({ data });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Signin Failed";
    res.status(400).json({ error: { message: errorMessage } });
  }
};

export const gLogin = async (
  req: Request,
  res: Response<AuthResponse>
): Promise<void> => {
  try {
    const gUser = await getGoogleAuthUser(req.body.accessToken);
    const { role } = req.body;
    const { email, name: firstName } = gUser;
    const data = await service.gLogin({ email, firstName, role });
    res.json({ data });
  } catch (err: any) {
    const errorMessage = err.message || "Google Sigin Failed";
    res.status(400).json({ error: { message: errorMessage } });
  }
};

export const updateProfile = async (
  req: Request,
  res: Response<AuthResponse>
): Promise<void> => {
  try {
    const data = await service.updateProfile(req.body);
    res.json({ data });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Unable to Update The Profile";
    res.status(400).json({ error: { message: errorMessage } });
  }
};

export const verifyAadhar = async (
  req: Request,
  res: Response<AuthResponse>
): Promise<void> => {
  try {
    const { addhar_number } = req.body;

    // Basic validation: Aadhaar should be a 12-digit numeric string
    const isValidAadhaar =
      typeof addhar_number === "string" && /^\d{12}$/.test(addhar_number);

    if (isValidAadhaar) {
      // Dummy success response
      res.json({ data: { verified: true } });
    }
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : "Unable to Verify the Aadhar Number";
    res.status(400).json({ error: { message: errorMessage } });
  }
};

// Uncomment when implementing Google login
/*
export const gLogin = async (req: Request, res: Response<AuthResponse>): Promise<void> => {
  try {
    const data = await service.gLogin(req.body);
    res.json({ data });
  } catch (err) {
    const errorMessage = err instanceof Error ? err.message : "Google Signin Failed";
    res.status(400).json({ error: { message: errorMessage } });
  }
};
*/
