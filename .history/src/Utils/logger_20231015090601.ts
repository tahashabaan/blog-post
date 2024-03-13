import winston,{createLogger, format} from "winston";

const {json, colorize, timestamp}  = format



 export default class LoggerService{
    // private winston;
    constructor(){
        this.logger();
        //  new winston();
    }
    
    formatDate(){
        return new Date(Date.now()).toLocaleString();
    }

    logger (){
           return createLogger({
            
              format:format.combine(
                 colorize(),
              ),
              transports:[
              new winston.transports.Console()
              ]
           })
    
  }
}

