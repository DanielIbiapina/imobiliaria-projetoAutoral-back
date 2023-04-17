import { Request, Response } from "express";
import httpStatus from "http-status";
import adminService from "../services/admin-service";
import propertyService from "@/services/property-service";
import { AuthenticatedRequest } from "@/middlewares";
import messagesService from "@/services/messages-service";

export async function addProperty(req: AuthenticatedRequest, res: Response) {
  try {
    const { userId } = req;
    const data = req.body.data;
    const fullData = req.body.fullData;
    await adminService.createProperty(data);
    const lastProperty = await propertyService.getRecentProperties();

    const propertyId = lastProperty[0].id;
    console.log(propertyId);
    await adminService.createPropertyFull(fullData, propertyId);
    return res.status(200).send("Imóvel criado");
  } catch (error) {
    console.log(error);
    if (error.name === "UnauthorizedError")
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    if (error.name === "NotFoundError")
      return res.sendStatus(httpStatus.NOT_FOUND);
    return res.sendStatus(500);
  }
}

export async function getMessages(req: AuthenticatedRequest, res: Response) {
  try {
    const messages = await messagesService.getMessages();
    return res.status(200).send(messages);
  } catch (error) {
    console.log(error);
    if (error.name === "UnauthorizedError")
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    if (error.name === "NotFoundError")
      return res.sendStatus(httpStatus.NOT_FOUND);
    return res.sendStatus(500);
  }
}

export async function postRealStateDevelopment(
  req: AuthenticatedRequest,
  res: Response
) {
  try {
    const { userId } = req;
    const data = req.body;
    await adminService.createRealStateDevelopment(data);
    return res.status(200).send("Empreendimento criado");
  } catch (error) {
    console.log(error);
    if (error.name === "UnauthorizedError")
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    if (error.name === "NotFoundError")
      return res.sendStatus(httpStatus.NOT_FOUND);
    return res.sendStatus(500);
  }
}

export async function postRealStateDevelopmentImage(
  req: AuthenticatedRequest,
  res: Response
) {
  try {
    const { userId } = req;
    const data = req.body;
    await adminService.createRealStateDevelopmentImage(data);
    return res.status(200).send("Imagem Adicionada");
  } catch (error) {
    console.log(error);
    if (error.name === "UnauthorizedError")
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    if (error.name === "NotFoundError")
      return res.sendStatus(httpStatus.NOT_FOUND);
    return res.sendStatus(500);
  }
}
