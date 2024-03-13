import winston,{createLogger, format} from "winston";



 export default class LoggerService{
    priv
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

