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

         this.initializeMiddlewares();
    }

    get getServer():Application{
         return this.app
    }


    private initializeMiddlewares(){

       this.app.use(express.json())
       this.app.use(express.urlencoded({ extended: true }));

       this.app.ge

    }

    listen(){
     this.app.listen(this.port, () => {
          console.log(`this is listening on ${this.port}`);
     })
     
    }
}

