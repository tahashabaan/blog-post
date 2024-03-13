import express, { Application, NextFunction, Request, Response } from "express";
import swaggerUiExpress  from 'swagger-ui-express';

import { PORT } from "./Config";
import { loggerDev } from "./Utils/logger";
import ConnectDatabase from 'DB'
import swaggerSpec  from ''
export default class App {
  //  public app ;
  private app: Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = Number(PORT) || 5000;
    this.initializeRoutes();
    this.initializeMiddlewares();
    this.connectDatabase()
  }

  get getServer(): Application {
    return this.app;
  }

  private initializeMiddlewares() {
    // this.app.use(cors())
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerSpec));

  }

  // define routes app
  private initializeRoutes() {
    this.app.get("/", (reg: Request, res: Response, next: NextFunction) => {
      res.send("<h1>hello first project oop</h1>");
    });
  }

  private connectDatabase(){
    const pool = new ConnectDatabase();
    pool.connectDatabase();
  }
  // listing app on port => 3000
  listen() {
    this.app.listen(this.port, () => {
      loggerDev.info(`this is listening on ${this.port}`);
    });
  }

}


