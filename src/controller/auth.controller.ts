import bcrypt from "bcrypt";
import { NextFunction, Request, Response } from "express";

import User from "../models/user.model";
import CustomError from "../utils/custom.error";
import {
  checkPassword,
  comparePassword,
  hashPassword,
  checkEmail,
} from "../utils/validation";

import SendEmail from "../utils/sendEmail";
import { generateToken } from "../utils/token";
import { GMAIL_USER, SECRETKEY } from "../config";
import jwt from "jsonwebtoken";
import async from "./../middleware/sendEmail.middleware";

interface IRequest extends Request {
  id?: string;
  token?: string;
  isLoggedIn?: boolean;
}

// interface Session {
//   token?: string;
// }

export default class authController {
  constructor() {}
  // {key:"errMesg", ""}
  private messega = (
    mesg: { key: string; message: string; dir: string },
    req,
    res
  ) => {
    req.flash(mesg.key, mesg.message);
    return res.redirect(mesg.dir);
  };

  public static async getSignUp(
    req: IRequest,
    res: Response,
    next: NextFunction
  ) {
    const errMesg = req.flash("errMesg");
    const hasErrMesg = errMesg.length > 0 ? true : false;

    const sucessMesg = req.flash("sucessMesg");
    const hasSucMesg = sucessMesg.length > 0 ? true : false;
    res.render("layouts/signUp", {
      hasErrMesg,
      errMesg,
      hasSucMesg,
      sucessMesg,
      isLoggedIn: req.isLoggedIn,
    });
  }
  public static async signUp(req: IRequest, res: Response, next: NextFunction) {
    try {
      // req.body
      // 1- check password
      const checkPass = checkPassword(req.body.password);
      const checkEma = checkEmail(req.body.email);

      if (!checkEma || !checkPass) {
        // next(new CustomError(400, "email or password invalid!"));
        req.flash("errMesg", "email or password invalid!");
        return res.redirect("/task2/signup");
      }
      const user = await User.findOne(
        // check by email
        { where: { email: req.body.email } }
      );
      // check uaername and email in db or not
      // else return error
      if (user) {
        // next(new CustomError(401, "user exist alreedy..."));
        // res.redirect("//signIn");
        req.flash("errMesg", "this email used before... login!");
        return res.redirect("/task2/signup");
      }
      // if not then create new user
      // 1-hash password
      // const hashPass = hashPassword(req.body.password);
      req.body.password = await bcrypt.hash(req.body.password, 8);
      // 2-save user in db
      let role = req.body.role;
      role = role ? role : "user";
      const body = { ...req.body, role };
      await User.create(body);
      req.flash("sucessMesg", "user created!");
      res.status(201).redirect("/task2/signIn");
    } catch (err) {
      next(new CustomError(500, "somerhing went wrong!"));
    }
  }

  public static async getSignIn(
    req: IRequest,
    res: Response,
    next: NextFunction
  ) {
    const errMesg = req.flash("errMesg");
    const hasErrMesg = errMesg.length > 0 ? true : false;

    const sucessMesg = req.flash("sucessMesg");
    const hasSucMesg = sucessMesg.length > 0 ? true : false;

    res.render("layouts/signIn", {
      hasErrMesg,
      errMesg,
      hasSucMesg,
      sucessMesg,
      isLoggedIn: req.isLoggedIn,
    });
  }

  public static async signIn(req: any, res: Response, next: NextFunction) {
    try {
      //  logic controller for sign in
      // check user in db or not by email
      const user = await User.findOne({ where: { email: req.body.email } });
      // if not then return error
      if (!user) {
        // next(new CustomError(401, "this is account not exist..."));
        req.flash("errMesg", "user not found!...register!");
        return res.redirect("/task2/signin");
      }
      // else check password && email
      const checkPass = await comparePassword(req.body.password, user.password);
      const checkEma = await checkEmail(req.body.email);
      // if password not match && email then return error
      if (!checkEma || !checkPass) {
        req.flash("errMesg", "email or password a invalid !");
        return res.redirect("/task2/signin");
        // return next(new CustomError(400, "email or password a invalid !"));
      } // else return seesion cookies in wep app

      // 1-generate token!!
      const token: string = await generateToken(user.id);
      // if (!token) return next(new CustomError(400, "invalid token!"));
      // (req.session as unknown as IRequest).token = token;
      req.session.token = token;

      // req.userId = user.id;
      // req.session.Session.token = token;
      // 2- create session to connect  using jwt!
      // req.session.isLoggedIn = true;
      // console.log("token" + token);
      res.redirect("/task2/profile");
    } catch (err) {
      next(new CustomError(500, "somerhing went wrong!"));
    }
    /**
     * how can protect route ????
     * cna store key in session
     *   1- check token in every request
     *   2- check id in every request
     */
    console.log("signIn::::", req.isLoggedIn);
    console.log("signInId::::", req.id);
  }

  public static async logOut(req: IRequest, res: Response, next: NextFunction) {
    // reset logic
    req.session.destroy((err) => {
      if (err) {
        req.flash("errMesg", "something went wrong!");
        return res.redirect("/task2/profile");
        // return next(new CustomError(400, "something went wrong!" + err));
      } else {
        req.isLoggedIn = false;
        res.redirect("/task2/signup");
      }
      console.log("logout:::", req.isLoggedIn);
    });
  }

  public static async resetPass(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    //  logic  of reset password

    try {
      const { email } = req.body;
      const user = await User.findOne({ where: { email } });
      const token = await generateToken(user.id);
      // send email
      const mailOptions = {
        from: GMAIL_USER,
        to: email,
        subject: "forget password",
        text: `""<a href="http://localhost:3000//resetPassword/${token}">click here to reset password</a>`,
      };

      await SendEmail.sendEmail(mailOptions);

      // verify token valid or not
      const tokenVerify = req.params.token;
      const decode = await jwt.verify(tokenVerify, SECRETKEY);
      // else return error
      // if valid then reset password
      // checck valid token or not ??
      if (!decode) return next(new CustomError(400, "invalid token!!"));
      const paas = await bcrypt.hash(req.body.password, 8);
      user.password = paas;
      await user.save();
      // if (!isValidToken) return next(new CustomError(400, "invalid token!!"));
    } catch (err) {
      next(new CustomError(500, "something went wrong!"));
    }
  }
}
