import { createTransport } from "nodemailer";
import { GMAIL_USER, GMAIL_PASS } from "../config";
import CustomError from "./custom.error";
import { NextFunction } from "express";

export interface IEmailOPtions {
  from?: string;
  to: string;
  subject: string;
  text?: string;
}

export class SendEmail {
  private static transporter = createTransport({
    host: "smtp.gmail.com",
    service: "gmail",
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASS,
    },
  }); // constructor(private mailOptions: IEmailOPtions) {}
  //propertities

  public static async sendEmail(mailOptions: IEmailOPtions) {
    // logic send email
    try {
      // 1- call transporter email
      // 2-send Email
      await this.transporter.sendMail(mailOptions);
    } catch (err) {
      // next(new CustomError(500, "something went wrong!" + err));
      throw new CustomError(500, "something went wrong!" + err);
    }
  }
}

export default SendEmail;
