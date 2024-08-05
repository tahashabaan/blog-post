import 'reflect-metadata';
import express, { Application } from "express";
import swaggerUiExpress from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";

import {PORT} from "./Config";
import cors from "cors";
import passport from "passport";
import GoogleStrategy from "passport-google-oauth20";


import swaggerSpec from "../swager.json";
import errorHandleMiddleware from "./Middleware/errorHandleMiddleware";
import { connectDb } from "./DB";
import { options } from '../swagerOption';

export default class APP{
    //properties
    private app: Application;
    private port: number;
  //  private routes: any;
    constructor(private routes){
        this.app = express();
        this.port = Number(PORT) || 5000;
        this.initializeMiddlewares();
        this.initializeRoutes();
        this.connectDatabase();
        // this.listen()
    //    this.routes = routes;
    }

    // methods 

    //initializeMiddlewares
    private initializeMiddlewares(){
        // use cors
        // use express.json
        // use express.urlencoded
        // use passport
        // use googleStrategy
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
        // this.app.use(passport.initialize());
         const swagerDoc= swaggerJsdoc(options);
        this.app.use('/api-docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swagerDoc));

         this.app.use("*", errorHandleMiddleware)
    }

    //initializeRoutes
    private initializeRoutes(){
        // use router
        // use blogController
        // use initializeRoutes
        this.routes.forEach((route: any) => {
            this.app.use("/", route.router);
        });
          
    }

    public getApp(){
         return this.app;
    }

     public async connectDatabase(){
        // connect to database
          await connectDb();
    }

    public listen(){
        // listen to port
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
          });
    }


}