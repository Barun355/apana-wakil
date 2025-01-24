import { Router } from "express";
import * as controller from "./controller";
import { authMiddleware } from "../../middlewares/middleware";
const authRouter = Router();

authRouter.post("/signup", controller.signup);
authRouter.post("/signin", controller.signin);
authRouter.post("/gLogin", controller.gLogin);

authRouter.use(authMiddleware);
authRouter.post("/verifyaadhar", controller.verifyAadhar);
authRouter.put("/", controller.updateProfile);

export default authRouter;
