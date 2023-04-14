import { Router } from "express";
import { addProperty } from "../controllers/admin-controller";

import { authenticateAdmin, authenticateToken } from "@/middlewares";

const adminRouter = Router();

adminRouter
  .all("/*", authenticateToken, authenticateAdmin)
  .post("/", addProperty);

export { adminRouter };
