import winston, { createLogger, transports, format } from "winston";

const { json, colorize, timestamp, combine, label, printf } = format;

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
      transports: [
        new transports.Console(),
        new transports.File({ filename: "console.log" }),
      ],
    });
  }
}

class LogerDevService {
    constructor(){

    }
  myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level}: ${message}`;
  });

  logger( =) createLogger({
    format: combine(label({ label: "right meow!" }), timestamp(), myFormat),
    transports: [new transports.Console()],
  });
}
