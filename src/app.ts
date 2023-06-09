import express, { Express } from "express";
import cors from "cors";

import { loadEnv, connectDb, disconnectDB } from "@/config";
import {
  usersRouter,
  authenticationRouter,
  adminRouter,
  propertiesRouter,
  messagesRouter,
  realStateDevelopmentRouter,
} from "@/routers";

loadEnv();

const app = express();
app
  .use(cors())
  .use(express.json())
  .get("/health", (_req, res) => res.send("OK!"))
  .use("/property", propertiesRouter)
  .use("/admin", adminRouter)
  .use("/users", usersRouter)
  .use("/auth", authenticationRouter)
  .use("/messages", messagesRouter)
  .use("/realstate-development", realStateDevelopmentRouter);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}

export async function close(): Promise<void> {
  await disconnectDB();
}

export default app;
