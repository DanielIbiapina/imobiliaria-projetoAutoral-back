import { Router } from "express";
import { getMessage, postMessage } from "@/controllers";

const messagesRouter = Router();

messagesRouter.post("/", postMessage);
messagesRouter.get("/", getMessage);

export { messagesRouter };
