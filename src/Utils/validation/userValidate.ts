import validateMiddleware from "@/Middleware/validateMiddleware";
import { body, check } from "express-validator";


export const userValidate =  [
    check("id").isMongoId().notEmpty().withMessage("id is required"),
    validateMiddleware
];

export const createUserValidate =  [
    check("name").isString().not().isEmpty().withMessage('Name is required').isLength({ min: 3 }).withMessage('Name must be at least 3 characters long'),
    check("email").isString().not().isEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format'),
    check("password").isString().not().isEmpty().withMessage('Password is required').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
];

export const updateUserValidate =  [
    check("id").isMongoId().notEmpty().withMessage("id is required"),
    validateMiddleware
];

export const delUserValidate =  [
    check("id").isMongoId().notEmpty().withMessage("id is required"),
    validateMiddleware
];