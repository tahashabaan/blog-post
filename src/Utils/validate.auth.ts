import { SECRET_KEY } from "@/Config";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const hashedPassword = async (password: string) => {
  return await bcrypt.hash(password, 12);
};

export const generateToken = async (id: string) => {
  return await jwt.sign({ id }, process.env.SECRET_KEY);
};

export const verfiyToken = async (token: string) => {
  return await jwt.verify(token, SECRET_KEY);
};

// check password is match or not
export const isMatchPass = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  return await bcrypt.compare(password, hashedPassword);
};

// check email is match or not
export const isMatchEmail = async (email: string): Promise<boolean> =>
  await email.includes("@");
