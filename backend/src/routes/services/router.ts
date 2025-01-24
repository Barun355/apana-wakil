import { Router } from "express";
import { authMiddleware } from "../../middlewares/middleware";
import * as controller from "./controller";

const serviceRouter = Router();

serviceRouter.use(authMiddleware);

serviceRouter.post("/create", controller.createService);
serviceRouter.get("/", controller.fetchServices);
serviceRouter.get("/:id", controller.fetchService);
serviceRouter.get("/lawyer/:id", controller.fetchLawyerServices);

export default serviceRouter;
