import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";
const JWT_SECRET = process.env.JWT_SECRET || "wakeel";

export const authMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      throw new Error("unAuthorized");
    }
    const token = authHeader.split(" ")[1];

    const decoded: any = verify(token, JWT_SECRET!);
    if (!decoded) {
      throw new Error("unAuthorized");
    }
    (req as any).userId = decoded.id;
    (req as any).role = decoded.id;

    next();
  } catch (err: any) {
    res.status(403).json({ error: { message: err.message } });
  }
};
