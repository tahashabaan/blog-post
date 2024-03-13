import express from 'express'
import dotenv from 'dotenv'


export defaulclass App{
    //  public app ;
    public app: express.Application;

    constructor(){
         this.app = express();
    }
}

