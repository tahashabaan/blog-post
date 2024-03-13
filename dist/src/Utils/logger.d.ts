import winston from "winston";
declare class LoggerDevService {
    timestamp(): string;
    myFormat(): winston.Logform.Format;
    logger(): winston.Logger;
    error(message: string): Promise<void>;
    warn(message: string): Promise<void>;
    info(message: string): Promise<void>;
    debug(message: string): Promise<void>;
}
declare const loggerDev: LoggerDevService;
export { loggerDev };
