import cors from "cors";
import express from "express";
import "dotenv/config";

import { router } from "./routes";

const server = express();

server.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",").map((o) => o.trim()) || true,
  })
);
server.use(express.json());
server.use(router);

export { server };
