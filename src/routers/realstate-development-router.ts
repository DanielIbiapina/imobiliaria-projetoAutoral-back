import {
  listOfRealStateDevelopments,
  listRealStateDevelopment,
} from "@/controllers";
import { Router } from "express";

const realStateDevelopmentRouter = Router();

realStateDevelopmentRouter
  .get("/", listOfRealStateDevelopments)
  .get("/:id", listRealStateDevelopment);

export { realStateDevelopmentRouter };
