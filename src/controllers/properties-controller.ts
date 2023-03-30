import propertyService from "../services/property-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function listOfRecentProperties(req: Request, res: Response) {
  try {
    const data = await propertyService.getRecentProperties();
    return res.status(200).send(data);
  } catch (error) {
    if (error.name === "UnauthorizedError")
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    if (error.name === "NotFoundError")
      return res.sendStatus(httpStatus.NOT_FOUND);
    return res.sendStatus(500);
  }
}

export async function listOfDestaqueProperty(req: Request, res: Response) {
  try {
    const data = await propertyService.getDestaqueProperty();

    return res.status(200).send(data);
  } catch (error) {
    if (error.name === "UnauthorizedError")
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    if (error.name === "NotFoundError")
      return res.sendStatus(httpStatus.NOT_FOUND);
    return res.sendStatus(500);
  }
}
