import { Router } from "express";
import { authMiddleware } from "../../middlewares/middleware";
import * as controller from "./controller";

const ratingRouter = Router();

ratingRouter.use(authMiddleware);

ratingRouter.post("/", controller.createRating);
ratingRouter.delete("/", controller.deleteRating);

export default ratingRouter;
