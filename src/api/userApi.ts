import { container} from "tsyringe";
import { Request, Response, NextFunction } from "express";
import UserService from "@/Services/UserServive";
import ApiError from "@/Utils/ApiError";

// @injectable()
export default class UserAPI {
  private userService: UserService;
  constructor() {
    this.userService = container.resolve(UserService);
  }

  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = this.userService.getAllUsers();
      res.status(200).json(users);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  // @ get
  // private route
  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = this.userService.getUser(id);
      res.status(200).json(user);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const user = this.userService.createUser(req.body);
      res.status(201).json(user);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }
  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = this.userService.updateUser(id, req.body);
      res.status(200).json(user);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async delUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = this.userService.delUser(id);
      res.status(204).send();
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }
}
