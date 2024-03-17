import jwt from "jsonwebtoken";
import { SECRETKEY } from "../config/";
import { IRequest } from "../interface/request.interface";
import { NextFunction } from "express";
import CustomError from "../utils/custom.error";

export default (req: any, res: Response, next: NextFunction) => {
  // token
  // check verify token is valid or not?
  // console.log("token :::" + req.session.token);

  try {
    const token = (req.session as unknown as IRequest).token;
    if (!token) return next(new CustomError(401, "invalid token"));
    const payload = jwt.verify(token, SECRETKEY);
    req.id = payload;
    req.isLoggedIn = true;
    next();
  } catch (err) {
    next(new CustomError(401, "invalid token" + err));
  }

  // if (req.isLoggedIn) next();
  // else next(new CustomError(401, "unauthorized" ));

  // console.log(req.isLoggedIn);

  // if valid then next()
  // else return error
  // 2- send payload  to protect wep app
};
