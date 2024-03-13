import winston from "winston";

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [new winston.transports.Console()],
  });


 export default class LoggerService{
    constructor(){
        this.logger();
    }
    formatDate(){
        return new Date(Date.now()).to
    }
    logger (){
        const logger = winston.createLogger({
            level: 'info',
            format: winston.format.json(),
            transports: [new winston.transports.Console()],
          });

          return logger;
    }
  }

