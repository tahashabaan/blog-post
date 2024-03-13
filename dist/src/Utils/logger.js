"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerDev = void 0;
const winston_1 = require("winston");
const path_1 = require("path");
const { json, colorize, timestamp, combine, label, printf } = winston_1.format;
class LoggerService {
    // private winston;
    constructor(route) {
        this.route = route;
    }
    formatDate() {
        return new Date(Date.now()).toLocaleString();
    }
    logger() {
        return (0, winston_1.createLogger)({
            format: combine(colorize(), timestamp({ format: this.formatDate }), json()),
            transports: [
                new winston_1.transports.File({
                    filename: (0, path_1.join)(__dirname, "logger", `${this.route}.log`),
                }),
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
            return `${timestamp} | ${level} |  ${message}`;
        });
    }
    logger() {
        return (0, winston_1.createLogger)({
            format: combine(colorize(), timestamp({ format: this.timestamp }), this.myFormat()),
            transports: [new winston_1.transports.Console()],
        });
    }
    async error(message) {
        this.logger().error(message);
    }
    async warn(message) {
        this.logger().warn(message);
    }
    async info(message) {
        this.logger().info(message);
    }
    async debug(message) {
        this.logger().debug(message);
    }
}
const loggerDev = new LoggerDevService();
exports.loggerDev = loggerDev;
//# sourceMappingURL=logger.js.map