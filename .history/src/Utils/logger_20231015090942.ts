import winston, { createLogger, format } from "winston";

const { json, colorize, timestamp } = format;

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
      format: format.combine(colorize(), timestamp(), json()),
      transports:[
        new winston.transports.Console(),
        new winston.transports.File({filename:'console.log'})
      ]
    });
  }
}
