import { Router } from "express";
import { addProperty } from "../controllers/admin-controller";

//import { authenticateToken } from "@/middlewares";

const adminRouter = Router();

adminRouter
  //.all("/*", authenticateToken)
  .post("/", addProperty);

export { adminRouter };
