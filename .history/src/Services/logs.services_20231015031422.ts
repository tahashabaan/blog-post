import winston from "winston";

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [new winston.transports.Console()],
  });


  class LoggerService{
    constructor(){
        this.logger();

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

