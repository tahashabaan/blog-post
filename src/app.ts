import bodyParser from "body-parser";
import cors from "cors";
import express, { Application, Request, Response } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import session from "express-session";
import connectSessionSequelize from "connect-session-sequelize";
import flash from "connect-flash";

import errorMiddleware from "./middleware/error.middleware";

// import bodyParser from "body-parser";

import rootDir from "./utils/path";
import sequelize from "./db";
// import User from "./models/user.model";
import { SESSIONSECRETKEY } from "./config";
import { render } from "ejs";

const SequelizeStore = connectSessionSequelize(session.Store);

export default class App {
  private app: Application;
  constructor(private readonly route: any[]) {
    console.log("App is running");
    this.app = express();
    this.initViewEngine();
    this.initialsMiddleware();
    this.routes();
    //this.listen();
  }

  private initViewEngine() {
    // set view engine
    this.app.set("view engine", "ejs"); // or 'pug' if you're using Pug    // set views directory

    this.app.set("views", path.join(rootDir, "views"));
    // render static files
    this.app.use(express.static(path.join(rootDir, "public")));
    // set proxy
  }

  private initialsMiddleware() {
    // incoming request body
    this.app.use(express.json());
    //  this.app.use(bodyParser.json());
    // incoming request body
    this.app.use(bodyParser.urlencoded({ extended: false }));
    this.app.use(cookieParser());

    this.app.use(
      session({
        secret: SESSIONSECRETKEY,

        cookie: {
          path: "/",
          httpOnly: false,
          maxAge: 24 * 60 * 60 * 1000,
        },

        saveUninitialized: true,
        resave: false,

        store: new SequelizeStore({
          db: sequelize,
        }),

        // store: new,
        // store: new SequelizeStore({
        //   db: sequelize, // Pass your Sequelize instance here
        // }),
      })
    );
    this.app.set("trust proxy", 1);
    this.app.use(flash());
    // allow header create credentials
    this.app.use(
      cors({
        credentials: true,
        // origin: "https://your-client-address.com",
      })
    );
    // configuration cookies

    // set configuration in express session
  }

  private routes() {
    this.app.get("/", (req: any, res, next) => {
      console.log("indexxx::::", req.isLoggedIn);
      console.log("indexxx::::", req.id);
      res.render(`index`, { isLoggedIn: req.isLoggedIn });
    });

    // this.app.get("/task2", (req, res) => {
    //   // res.render("index");
    //   // res.render("index", { title: "my friends" });
    //   res.send("hi my friends ");
    //   // res.render(`/`);
    // });

    this.route.forEach((route) => {
      this.app.use("/task2", route);
    });

    this.app.use("*", (err, req, res, next) => {
      res.render("404", { err, message: "page not found" });
      //  req.flash("errMesg", `${err.message}`);
    });
  }

  public getServer() {
    return this.app;
  }

  private connectToDatabase() {
    sequelize
      .sync()
      .then(() => {
        console.log("Connection successful");
      })
      .catch((err) => {
        console.error("Unable to connect to database:", err);
      });
  }
  public listen() {
    this.app.listen(3000, () => {
      console.log("Server running at http://localhost:3000/");
      this.connectToDatabase();
    });
  }
}
