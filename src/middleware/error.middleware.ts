import { Request, Response, NextFunction } from "express";
const errorMiddleware = (
  err: { statusCode: number; message: string },
  req: Request,
  res: Response,
  next: NextFunction
) => {
  res.send({
    message: err.message || "something went wrong",
    statusCode: err.statusCode || 500,
  });
};
export default errorMiddleware;
// Compare this snippet from src/utils/custom.error.ts:
