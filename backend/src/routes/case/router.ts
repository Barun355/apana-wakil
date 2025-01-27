import { Router } from "express";
import { authMiddleware } from "../../middlewares/middleware";
import * as controller from './controller'

const caseRouter = Router()
caseRouter.use(authMiddleware)
caseRouter.post("/",controller.createcase)
caseRouter.get("/",controller.getCases)

export default caseRouter