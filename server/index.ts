import express from "express";
import cors from "cors";
import { handleDemo } from "./routes/demo";
import { searchMedicalServices } from "./routes/search-services";

export function createServer() {
  const app = express();

  // Middleware
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // Example API routes
  app.get("/api/ping", (_req, res) => {
    res.json({ message: "Hello from Express server v2!" });
  });

  app.get("/api/demo", handleDemo);

  // Medical services search API
  app.get("/api/search-services", searchMedicalServices);

  return app;
}
