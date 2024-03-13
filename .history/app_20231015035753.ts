import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv'


export default class App{
    //  public app ;
    public app: Application;
    public port : number;

    constructor(){
         this.app = express();
         this.port= int(process.env.PORT) || 5000;
    }
}

