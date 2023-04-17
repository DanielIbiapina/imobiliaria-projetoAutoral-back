import realStateDevelopmentService from "@/services/realstate-development-service";
import { Request, Response } from "express";
import httpStatus from "http-status";

export async function listOfRealStateDevelopments(req: Request, res: Response) {
  try {
    const data = await realStateDevelopmentService.getRealStateDevelopments();

    return res.status(200).send(data);
  } catch (error) {
    if (error.name === "UnauthorizedError")
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    if (error.name === "NotFoundError")
      return res.sendStatus(httpStatus.NOT_FOUND);
    return res.sendStatus(500);
  }
}

export async function listRealStateDevelopment(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const data = await realStateDevelopmentService.getRealStateDevelopment(
      Number(id)
    );

    return res.status(200).send(data);
  } catch (error) {
    if (error.name === "UnauthorizedError")
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    if (error.name === "NotFoundError")
      return res.sendStatus(httpStatus.NOT_FOUND);
    return res.sendStatus(500);
  }
}
