import bcrypt from "bcrypt";

export const comparePassword = async (
  newPass: string,
  oldPass: string
): Promise<boolean> => {
  //compare it password
  return bcrypt.compare(newPass, oldPass);
};

export const checkPassword = async (pass: string): Promise<boolean> => {
  //compare it password
  return pass.length >= 6;
};

export const hashPassword = async (pass: string): Promise<string> => {
  try {
    return await bcrypt.hash(pass, 8);
  } catch (err) {
    throw new Error(err);
  }
};

export const checkEmail = (email: string): boolean => {
  return email.includes("@");
};
