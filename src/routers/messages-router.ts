import { Router } from "express";
import { postMessage } from "@/controllers";

const messagesRouter = Router();

messagesRouter.post("/", postMessage);

export { messagesRouter };
