import { GMAIL_USER } from "@/config";
import User from "@/models/user.model";
import CustomError from "@/utils/custom.error";
import SendEmail from "@/utils/sendEmail";
import { Request, Response, NextFunction } from "express";

export default async function (req: any, res: Response, next: NextFunction) {
  try {
    // logic send email
    const user = await User.findByPk(req.userId);
    // 2-send Email
    const emailOptions = {
      to: user.email,
      from: GMAIL_USER,
      subject: "",
      text: "",
    };
    SendEmail.sendEmail(emailOptions);
  } catch (err) {
    next(new CustomError(500, "something went wrong!" + err));
  }
}
