import { Router } from "express";
import { listOfDestaqueProperty } from "../controllers/properties-controller";
import { listOfRecentProperties } from "../controllers/properties-controller";

//import { authenticateToken } from "@/middlewares";

const propertiesRouter = Router();

propertiesRouter
  //.all("/*", authenticateToken)
  .get("/recent", listOfRecentProperties)
  .get("/destaques", listOfDestaqueProperty);

export { propertiesRouter };
