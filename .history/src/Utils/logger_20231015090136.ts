import winston,{createLogger, } from "winston";



 export default class LoggerService{
    constructor(){
        this.logger();
    }
    
    formatDate(){
        return new Date(Date.now()).toLocaleString();
    }

    logger (){
           return winston.createLogger({
              level:'info',
              format: winston.format.json(),
              transports:[
              new winston.transports.Console()
              ]
           })
    
  }
}

