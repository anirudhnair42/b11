import express from "express";
import axios from "axios";
import http from "http";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import "reflect-metadata";
import * as dotenv from "dotenv";
import { createExpressServer } from "routing-controllers";
import { UserController } from "./controllers/UserController";
import { CompanyController } from "./controllers/CompanyController";
import { LocationController } from "./controllers/LocationController";
import { IndustryController } from "./controllers/IndustryController";
import { MetricSnapshotController } from "./controllers/MetricSnapshotController";
import MetricsController from "./controllers/MetricsController";

dotenv.config();

if (!process.env.PORT) {
  console.log("PORT not defined");
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

app.use(
  cors({
    origin: "*",
    credentials: true,
    allowedHeaders: ["Content-Type", "authorization"],
  })
);

app.use(cookieParser());
app.use(bodyParser.json());

const serverApp = createExpressServer({
  controllers: [
    UserController,
    CompanyController,
    LocationController,
    IndustryController,
    MetricSnapshotController,
    MetricsController,
  ],
  defaultErrorHandler: false, // This disables the default error handler of routing-controllers
});

app.use(serverApp);

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
