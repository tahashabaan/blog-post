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
              level:'info',
              format: winston.format.json(),
              transports:[
              new winston.transports.Console()
              ]
           })
    
  }
}

