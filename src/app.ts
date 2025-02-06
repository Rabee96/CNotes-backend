import express from "express";
import compression from "compression";
import cors from "cors";
import helmet from "helmet";
import environment from "./config/environment";
import router from "./routes";

class App {
  public app: express.Application;
  public env: string;

  constructor() {
    this.app = express();
    this.env = environment.nodeEnv;
    this.initializeMiddlewares();
  }

  private initializeMiddlewares() {
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(
      cors({
        origin: environment.client.origin,
        credentials: true,
      })
    );
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use("/api/v1/", router);
  }
}

const { app } = new App();

export default app;
