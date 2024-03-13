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
//   constructor() {
//      this.logger();
//   }

  timestamp() {
    return new Date(Date.now()).toLocaleString();
  }

  myFormat() {
    return printf(({ level, message, timestamp }) => {
      return `${this.timestamp()} | ${level} |  ${message}`;
    });
  }

  logger() {
    return createLogger({
      format: combine(colorize(), this.myFormat()),
      transports: [new transports.Console()],
    });
  }

   async error(message:string){
       this.logger().error(message);
  }

  async info(message:string){
    this.logger().info(message);
}

async degub(message:string){
    this.logger().error(message);
}

async error(message:string){
    this.logger().error(message);
}

async error(message:string){
    this.logger().error(message);
}
async error(message:string){
    this.logger().error(message);
}
async error(message:string){
    this.logger().error(message);
}
//    async error(message:string, obj:Object){

//   }
}

const loggerDev = new LoggerDevService();

export { loggerDev };
