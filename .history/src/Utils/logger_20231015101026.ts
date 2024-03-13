import winston, { createLogger, transports, format } from "winston";

const { json, colorize, timestamp, combine, label, printf } = format;

class LoggerService {
  // private winston;
  constructor(private route:string) {}

  formatDate():string {
    return new Date(Date.now()).toLocaleString();
  }

  logger() {
    return createLogger({
      format: combine(colorize(), timestamp({format:this.formatDate}), json()),
      transports: [
        new transports.File({ filename: `./loggerRecord/${this.route}.log` }),
      ],
    });
  }
}

class LoggerDevService {
  //   constructor() {
  //      this.logger();
  //   }

  timestamp() {
    return new Date(Date.now()).toLocaleString();
  }

  myFormat() {
    return printf(({ level, message, timestamp }) => {
      return `${timestamp()} | ${level} |  ${message}`;
    });
  }

  logger() {
    return createLogger({
      format: combine(colorize(), this.myFormat()),
      transports: [new transports.Console()],
    });
  }

  async error(message: string) {
    this.logger().error(message);
  }

  async warn(message: string) {
    this.logger().warn(message);
  }

  async info(message: string) {
    this.logger().info(message);
  }

  async debug(message: string) {
    this.logger().debug(message);
  }
}

const loggerDev = new LoggerDevService();

export { loggerDev };
