import winston, { createLogger, transports, format } from "winston";

const { json, colorize, timestamp, combine, label, printf } = format;

export  class LoggerService {
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
      format: combine(colorize(), timestamp(), json()),
      transports: [
        new transports.File({ filename: "console.log" }),
      ],
    });
  }
}

class LogerDevService {
  constructor() {
    this.logger();
  }

  myFormat() {
    return printf(({ level, message, label, timestamp }) => {
      return `${timestamp} [${label}] ${level}: ${message}`;
    });
  }

  logger() {
    return createLogger({
      format: combine(
        colorize(),
        label({ label: "right meow!" }),
        timestamp(),
        this.myFormat()
      ),
      transports: [new transports.Console()],
    });
  }
}
