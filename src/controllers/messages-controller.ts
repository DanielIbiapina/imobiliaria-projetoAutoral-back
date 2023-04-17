import { Request, Response } from "express";
import httpStatus from "http-status";
import messagesService from "@/services/messages-service";

export async function postMessage(req: Request, res: Response) {
  try {
    const data = req.body;
    await messagesService.postMessage(data);
    return res.status(200).send("Mensagem enviada");
  } catch (error) {
    console.log(error);
    if (error.name === "UnauthorizedError")
      return res.sendStatus(httpStatus.UNAUTHORIZED);
    if (error.name === "NotFoundError")
      return res.sendStatus(httpStatus.NOT_FOUND);
    return res.sendStatus(500);
  }
}
