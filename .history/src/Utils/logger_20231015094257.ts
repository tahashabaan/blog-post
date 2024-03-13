import winston, { createLogger, transports, format } from "winston";

const { json, colorize, timestamp, combine, label, printf } = format;

class LoggerService {
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
      transports: [new transports.File({ filename: "console.log" })],
    });
  }
}

class LoggerDevService {
  constructor() {
    this.logger();
  }
  timestamp() {
    return format (() => new Date(Date.now()).toJSON());
  }
  myFormat() {
    return printf(({ level, message, label, timestamp }) => {
      return `${timestamp}  ${level}: ${message}`;
    });
  }

  logger() {
    return createLogger({
      format: combine(colorize(), this.timestamp(),  this.myFormat()),
      transports: [new transports.Console()],
    });
  }
}

const loggerDev = new LoggerDevService();

export { loggerDev };
