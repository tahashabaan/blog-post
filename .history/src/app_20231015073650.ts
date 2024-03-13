import express, { Application, NextFunction, Request, Response } from "express";
import dotenv from "dotenv";

import { PORT } from "./Config";

export default class App {
  //  public app ;
  private app: Application;
  private port: number;

  constructor() {
    this.app = express();
    this.port = Number(PORT) || 5000;
    this.initializeRoutes();
    this.initializeMiddlewares();
  }

  get getServer(): Application {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  // define 
  private initializeRoutes() {
    this.app.get("/", (reg: Request, res: Response, next: NextFunction) => {
      res.send("<h1>hello first project oop</h1>");
    });
  }
  // listing app on port => 3000
  listen() {
    this.app.listen(this.port, () => {
      console.log(`this is listening on ${this.port}`);
    });
  }

}
