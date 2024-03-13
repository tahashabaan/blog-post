import winston, { createLogger,transports, format } from "winston";

const { json, colorize, timestamp, combine } = format;

export default class LoggerService {
  // private winston;
  constructor() {
    this.logger();
    //  new winston();
  }

  formatDate() {
    return new Date(Date.now()).toLocaleString();
  }

  logger() {
    return createLogger({
      // not sepecifeid level

      // format date
      format: combine(colorize(), timestamp(), json()),
      transports:[
        new winston.transports.Console(),
        new winston.transports.File({filename:'console.log'})
      ]
    });
  }
}


const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  });
  
  const logger = createLogger({
    format: combine(
      label({ label: 'right meow!' }),
      timestamp(),
      myFormat
    ),
    transports: [new transports.Console()]
  });