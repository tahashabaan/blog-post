import { NextFunction, Request, Response } from "express";

import ApiError from "@/Utils/ApiError";
import queryRepository from "../../Repositery/queryRepository";
import User from "@/models/user.entity";
import { IUser } from "@/Interface/User/IUser";
// import { Payload } from "@/Interface/IAuthInterface";
// import AuthService from "@/Services/authService";
import {
  hashedPassword,
  generateToken,
  isMatchPass,
  isMatchEmail,
} from "../../Utils/validate.auth";
import { IRequest } from "../../Interface/request";
//

// hash password
// const hashedPassword = async (password: string) => {
//   return await bcrypt.hash(password, 12);
// };

// generate token
// const generateToken = async (id: string) => {
//   return await jwt.sign({ id }, process.env.SECRET_KEY);
// };

// check password is match or not
// const isMatchPass = async (
//   password: string,
//   hashedPassword: string
// ): Promise<boolean> => {
//   return await bcrypt.compare(password, hashedPassword);
// };

// check email is match or not
// const isMatchEmail = async (email: string): Promise<boolean> =>
//   await email.includes("@");

export default class AuthController {
  constructor(private readonly query: queryRepository<IUser>) {}

  async register(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;
      // 1-check user registed or not !
      const user = await this.query.findByEmail(email);
      if (user) {
        // 2- if user registed => return error
        return next(new ApiError(401, "email is already registed"));
      }
      // 3- if user not registed => create user and return user with hashed password
      // 3.1 hash password
      req.body.password = await hashedPassword(password);
      // 3.2 create user
      await User.create(req.body);

      res.status(201).json({ staus: "sucess", message: "user auhenticate" });
      // const payload: Payload = {
      //   tableName: "Publisher",
      //   columns: "name,email,password",
      //   values: `${name}, ${email},${password}`,
      // };

      // this.authService.register(payload, email);
    } catch (err) {
      next(new ApiError(401, "faild create user..."));
    }
    // const { email, password } = req.body;

    // const user = await this.authService.register(email, password);
    // res.status(201).json({ user });
  }

  async login(req: IRequest, res: Response, next: NextFunction) {
    try {
      const { email, password } = req.body;
      // 1- check user registed or not !
      const user = await this.query.findByEmail(email);
      // 2- if user not registed => return error
      if (!user) return next(new ApiError(401, "email is not registed"));
      // 3- if user registed => check password
      // 4- if password and email not correct => return error
      if (!isMatchPass(password, user.password) || isMatchEmail(email))
        return next(new ApiError(401, "password or email is not correct"));
      // 5- if password correct => return token
      const token = generateToken(user.id);
      res.status(200).json({ token });
      // const payload: Payload = {
      //   tableName: "Publisher",
      //   columns: "email, password",
      // };
    } catch (err) {
      next(new ApiError(401, "faild login..."));
    }
  }

  async logOut(req: Request, res: Response, next: NextFunction) {}
}
