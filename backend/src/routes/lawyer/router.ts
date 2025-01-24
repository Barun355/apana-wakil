import { Router } from "express";
import { authMiddleware } from "../../middlewares/middleware";
import * as controller from "./controller";

const lawyerRouter = Router();

lawyerRouter.use(authMiddleware);

lawyerRouter.get("/", controller.fetchLawyers);
lawyerRouter.get("/:id", controller.fetchLawyer);

export default lawyerRouter;
