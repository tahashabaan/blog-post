import { NextFunction, Request, Response, json } from "express";
import UserService from "../../Services/userService";
import ApiError from "@/Utils/ApiError";
import RepositoryQuery from "@/Repositery/RepositoryQuery";
import { createServer } from "http";
import queryRepository from "@/Repositery/queryRepository";

// interface Request {
//   name: string;
//   email: string;
//   password: string;
//   body: any;
// }

interface IUser {
  name: string;
  email: string;
  password: string;
}

export default class UserController {
  // private userService: UserService;
  constructor(private query: queryRepository<IUser>) {}
  // controller to create user
  public async createUser(req: Request, res: Response, next: NextFunction) {
    // console.log(req.body);
    try {
      const { name, email, password } = req.body;
      await this.query.create(req.body);
      res.status(201).json({
        status: "success",
        message: "user created sucessfully",
      });
    } catch (err) {
      next(new ApiError(500, "not can create user check it..."));
    }
  }
  // controller to read users user
  public async readUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.query.findAll();
      res.status(200).json({ status: "sucess", result });
    } catch (err) {
      next(new ApiError(500, "server error check it..."));
    }
  }
  // controller to read user by id
  public async readUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const tableParms = {
        tableName: "Publisher",
        id: Number(id),
      };
      const result = await this.query.findById(id);
      console.log(result);
      res.status(200).json({ status: "sucess", result });
    } catch (err) {
      next(new ApiError(400, "not can  get user by Id..."));
    }
  }
  // controller to update user by id
  public async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      // const { name, email, password } = req.body;
      // const tableParms = {
      //   tableName: "Publisher",
      //   id: Number(id),
      //   columns: "name, email, password",
      //   values: `'${name}', '${email}', '${password}'`,
      // };
      await this.query.update(id, req.body);
      res.status(200).json({ status: "sucess", mesage: "user update fields" });
    } catch (err) {
      next(new ApiError(400, "not can update user by id ..."));
    }
  }
  // controller to delete user  by id
  public async deleteUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      // console.log(typeof Number(id));
      // const stringId = String(id); // using String() function
      await this.query.delete(id);
      res
        .status(204)
        .json({ status: "sucess", message: "user deleted sucessfully" });
    } catch (err) {
      next(new ApiError(500, "not can del user by id in ..."));
    }
  }
  // public async createAdmin(){}
}
