import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv'

import { PORT } from './Config';


export default class App{
    //  public app ;
    private app: Application;
    private port : number;

    constructor(){
         this.app = express();
         this.port= Number(PORT) || 5000;
         dotenv.config({path:'./C'})
    }

    get getServer():Application{
         return this.app
    }
    initializeMiddlewares

    private initializeMiddlewares(){

    }
}

