import { NextFunction, Request, Response } from "express";

interface err {
  statusCode: number;
  message: string;
}



export default (err: err, req: Request, res: Response, next: NextFunction) => {
  let { statusCode, message } = err;
  statusCode = statusCode || 404;
  message = message || "something went wrong...global error";

  res.status(statusCode).json({
    status: "error",
    statusCode,
    message,
  });
};


/**
 * 
 * how handle middleaware to error 
 * app.use('*', (err, reg, res, next)=>{
 *     const {status, message}= err;
 * 
 * })
 */
