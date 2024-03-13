import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv'


export default class App{
    //  public app ;
    public app: express.Application;

    constructor(){
         this.app = express();
    }
}

