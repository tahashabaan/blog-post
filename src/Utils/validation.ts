import { Request, Response } from "express";
import { validationResult } from "express-validator";

const validation = (req: Request, res: Response) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      success: false,
      errors: errors.array(),
    });
  }
};

export default validation;
