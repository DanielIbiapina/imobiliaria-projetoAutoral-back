import { Router } from "express";
import { listProperty } from "../controllers/properties-controller";
import { listOfDestaqueProperty } from "../controllers/properties-controller";
import { listOfRecentProperties } from "../controllers/properties-controller";

//import { authenticateToken } from "@/middlewares";

const propertiesRouter = Router();

propertiesRouter
  //.all("/*", authenticateToken)
  .get("/recent", listOfRecentProperties)
  .get("/destaques", listOfDestaqueProperty)
  .get("/:id", listProperty);

export { propertiesRouter };
