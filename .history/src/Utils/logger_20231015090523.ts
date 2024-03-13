import winston,{createLogger, format} from "winston";

const {}  = for



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
                
              ),
              transports:[
              new winston.transports.Console()
              ]
           })
    
  }
}

