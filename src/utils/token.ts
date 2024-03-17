import { SECRETKEY } from "../config/";
import jwt from "jsonwebtoken";

// header signature payload

export const generateToken = async (payload: any): Promise<string> => {
  // try{
  return jwt.sign(payload, SECRETKEY);
  // }.catch(err){}
};
// export const verifyToken = async (
//   token: string
// ): Promise<string  | undefined> => {
//   try {
//     return jwt.verify(token, SECRETKEY);
//   } catch (error) {
//     return undefined;
//   }
// };
