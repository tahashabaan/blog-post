import express from 'express'
import dotenv from 'dotenv'


exorclass App{
    //  public app ;
    public app: express.Application;

    constructor(){
         this.app = express();
    }
}

