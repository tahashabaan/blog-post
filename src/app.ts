import express, { Application, NextFunction, Request, Response } from "express";
import swaggerUiExpress from "swagger-ui-express";
import cors from "cors";
import passport from "passport";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { PORT } from "./Config";
import { loggerDev } from "./Utils/logger";
// import { connectDb } from "DB";
// import SqlConnect from "./Utils/database";
import swaggerSpec from "../swager.json";
import errorHandleMiddleware from "./Middleware/errorHandleMiddleware";

import { connectDb } from "./DB";

// import { CLIENTID, CLIENTSECRET } from "./Config";
import { config } from "dotenv";

export default class App {
  //  public app ;
  private app: Application;
  private port: number;

  // private repositoryQuery: RepositoryQuery;
  constructor(private routes: any[]) {
    this.app = express(); // build my application
    this.port = Number(PORT) || 5000; // assign port
    // config({ path: `.env.development.local` });
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.connectDatabase();
    //this.getServer();
    this.listen();
  }
  public getApp(): Application {
    return this.app;
  }

  private initializeMiddlewares() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    // google authenticate
    // passport.use(
    //   new GoogleStrategy({
    //     clientID: CLIENTID,
    //     clientSecret: CLIENTSECRET,
    //     callbackURL: "auth/google/redirect",
    //   }),
    //   async (accessToken: string, refreshToken: string, profile, done: any) => {
    //     try {
    //       // 1- get user profile
    //       const user = User.findOne({ googleId: profile.id });
    //       // 2- check if user exist
    //       if (!user) {
    //         // => create user
    //         const newUser = new User({
    //           name: profile.displayName,
    //           email: profile.emails[0].value,
    //           googleId: profile.id,
    //         });
    //         await newUser.save();
    //         done(null, newUser);
    //       }
    //       // => save user to database}
    //     } catch (err) {
    //       done(err, false);
    //     }
    //   }
    // );
  }

  // define routes app
  private initializeRoutes() {
    this.routes.forEach((route) => this.app.use("/api/v1", route));
    // swagger api
    this.app.use(
      "/api-docs",
      swaggerUiExpress.serve,
      swaggerUiExpress.setup(swaggerSpec)
    );

    // global error handle
    this.app.use("*", errorHandleMiddleware);
    this.app.get("/", (req: Request, res: Response, next: NextFunction) => {
      res.status(200).json("hello world");
    });
  }

  private async connectDatabase() {
    // const pool = new ConnectDatabase();
    // pool.connectDatabase();
    connectDb();
    // await SqlConnect.connect();
  }
  // listing app on port => 3000
  listen() {
    this.app.listen(this.port, () => {
      loggerDev.info(`this is listening on ${this.port}`);
    });
  }
}
