import winston,{createLogger, format} from "winston";



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
            
              format:format.,
              transports:[
              new winston.transports.Console()
              ]
           })
    
  }
}

