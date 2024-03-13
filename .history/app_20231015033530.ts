import express from 'express'
import dotenv from 'dotenv'


class App{
    //  public app ;
    public app: express.Application;

    constructor(){
         this.app = express();
    }
}

