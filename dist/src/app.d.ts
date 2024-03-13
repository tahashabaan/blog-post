import { Application } from "express";
export default class App {
    private app;
    private port;
    constructor();
    get getServer(): Application;
    private initializeMiddlewares;
    private initializeRoutes;
    private connectDatabase;
    listen(): void;
}
