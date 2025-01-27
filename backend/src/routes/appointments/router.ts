import { Router } from "express";
import { authMiddleware } from "../../middlewares/middleware";
import * as controller from "./controller";

const appointmentRouter = Router();

appointmentRouter.use(authMiddleware);

appointmentRouter.post("/", controller.createAppointment);
appointmentRouter.put("/", controller.updateAppointment);
appointmentRouter.get("/",controller.getAppointments)

export default appointmentRouter;
