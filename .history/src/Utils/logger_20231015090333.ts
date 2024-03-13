import winston,{createLogger, format} from "winston";



 export default class LoggerService{
    private winston;
    constructor(){
        this.logger();
        this.winston =  new winston;
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

