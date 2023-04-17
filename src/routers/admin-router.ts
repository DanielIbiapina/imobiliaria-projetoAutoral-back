import { Router } from "express";
import {
  addProperty,
  getMessages,
  postRealStateDevelopment,
  postRealStateDevelopmentImage,
} from "../controllers/admin-controller";

import { authenticateAdmin, authenticateToken } from "@/middlewares";

const adminRouter = Router();

adminRouter
  .all("/*", authenticateToken, authenticateAdmin)
  .post("/", addProperty)
  .get("/", getMessages)
  .post("/realstate-development", postRealStateDevelopment)
  .post("/realstate-development-image", postRealStateDevelopmentImage);

export { adminRouter };
