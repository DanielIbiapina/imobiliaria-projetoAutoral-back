import { NextFunction, Request, Response } from "express";
import httpStatus from "http-status";
import * as jwt from "jsonwebtoken";
import { prisma } from "@/config";
import { AuthenticatedRequest } from "./authentication-middleware";

export async function authenticateAdmin(
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) {
  try {
    const { userId } = req;
    console.log(userId);
    const user = await prisma.user.findFirst({
      where: {
        id: userId,
      },
    });
    if (user.isAdmin !== true) return generateUnauthorizedAdmin(res);
    req.userId = userId;

    return next();
  } catch (err) {
    return generateUnauthorizedAdmin(res);
  }
}

function generateUnauthorizedAdmin(res: Response) {
  res.status(httpStatus.UNAUTHORIZED).send("You must be an admin to continue");
}
