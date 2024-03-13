import express, { Application, Request, Response } from 'express';
import dotenv from 'dotenv'


export default class App{
    //  public app ;
    public app: Ap;

    constructor(){
         this.app = express();
    }
}

