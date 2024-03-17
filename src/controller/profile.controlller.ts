import { Request, Response, NextFunction } from "express";
import { compare } from "bcrypt";

import CustomError from "../utils/custom.error";
import User from "../models/user.model";
import showMessage from "../utils/message.util";
import { checkEmail, hashPassword } from "../utils/validation";
// import { where } from "sequelize";

interface IRequest extends Request {
  id?: string;
  isLoggedIn?: boolean;
}

export default class ProfileController {
  constructor() {}

  public static async profile(req: any, res: Response, next: NextFunction) {
    try {
      console.log(req.id);
      console.log(req.isLoggedIn);
      const errMesg = req.flash("errMesg");
      const hasErrMesg = errMesg.length > 0 ? true : false;

      const sucessMesg = req.flash("sucessMesg");
      const hasSucMesg = sucessMesg.length > 0 ? true : false;

      const user = await User.findByPk(req.id);

      const { email, name } = user;

      res.render("layouts/profile", {
        email,
        name,
        errMesg,
        hasErrMesg,
        sucessMesg,
        hasSucMesg,
        isLoggedIn: req.isLoggedIn,
      });
    } catch (err) {
      next(new CustomError(400, "something went wrong!"));
    }
  }
  public static getUpdateProfile(
    req: IRequest,
    res: Response,
    next: NextFunction
  ) {
    // logic controller for update profile
    res.render("layouts/updateProfile", { isLoggedIn: req.isLoggedIn });
  }

  public static async getChangePassword(
    req: any,
    res: Response,
    next: NextFunction
  ) {
    // console.log(req.id);
    try {
      // logic controller for change password
      res.render("layouts/changePassword", { isLoggedIn: req.isLoggedIn });
      // console.log("ahmed ::::" + req.session.sid);
    } catch (err) {
      next(new CustomError(400, "something went wrong!"));
    }
  }
  public static async getDeleteProfile(
    req: IRequest,
    res: Response,
    next: NextFunction
  ) {
    // logic controller for delete profile
    res.render("layouts/deleteProfile", { isLoggedIn: req.isLoggedIn });
  }
  public static async updateProfile(
    req: IRequest,
    res: Response,
    next: NextFunction
  ) {
    // logic controller for update profile
    try {
      const { name, email } = req.body;
      const checkEmai = await checkEmail(email);
      if (!checkEmai) {
        const msg = {
          key: "errMesg",
          message: "email not correct!",
          dir: "/task2/profile",
        };
        showMessage(msg, req, res);
      }
      // id by auth
      await User.update(req.body, {
        where: {
          id: req.id,
        },
      });
      const msg = {
        key: "sucessMesg",
        message: "update user sucessfully!",
        dir: "/task2/profile",
      };
      showMessage(msg, req, res);
      // res.redirect("task2/profile");
    } catch (err) {
      next(new CustomError(400, "something went wrong !" + err));
    }
  }

  public static async deleteProfile(
    req: IRequest,
    res: Response,
    next: NextFunction
  ) {
    // logic controller for delete profile
    try {
      await User.destroy({ where: { id: req.id } });
      req.flash("sucessMesg", "user deleted!");
      req.session.destroy((err) =>
        next(new CustomError(400, "fail remove session!"))
      );
      res.redirect("/task2/signup");
      req.isLoggedIn = false;
      // res.render("/task2/s", { message: "user deleted!" });
    } catch {
      // next(new CustomError(401, "something went wrong !"));
      req.flash("errMesg", "something went wrong !");
      return res.redirect("/task2/profile");
    }
  }

  public static async changePassword(
    req: IRequest,
    res: Response,
    next: NextFunction
  ) {
    // logic controller for change password
    let { password, confirmPassword } = req.body;
    try {
      if (password !== confirmPassword) {
        req.flash("errMesg", "password not match!");
        return res.redirect("/task2/changePassword");
      }
      const user = await User.findByPk(req.id);
      // const compPass = await compare(password, user.password);

      // if (!compPass) {
      //   req.flash("errMesg", "password not correct!");
      //   return res.redirect("/task2/changePassword");
      //   // return next(new CustomError(401, "something went wrong !"));
      // }

      password = await hashPassword(password);

      await User.update({ password }, { where: { id: req.id } });
      req.flash("sucessMesg", "update password sucessfully!");
      res.redirect("/task2/profile");
      // {
      //   message: "update password sucessfully!",
      // });
    } catch (err) {
      next(new CustomError(401, "something went wrong!" + err));
    }
  }
}
