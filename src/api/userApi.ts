import { container} from "tsyringe";
import { Request, Response, NextFunction } from "express";
import UserService from "@/Services/UserServive";
import ApiError from "@/Utils/ApiError";
import { CreateUserDTO, UpdateUserDTO } from "@/Dtos/userDto";

// @injectable()
export default class UserAPI {
  private userService: UserService;
  constructor() {
    this.userService = container.resolve(UserService);
  }

  async getAllUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const users = await this.userService.getAllUsers();
      res.status(200).json({msg:"sucessfuly return users", users});
    } catch (err) {
      next(new ApiError(500,  'Internal server error' + err.message));
    }
  }

  // @ get
  // private route
  async getUserById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const user = await this.userService.getUser(id);
      res.status(200).json(user);
    } catch (err) {
      next(new ApiError(500, 'Internal server error'  + err.message));
    }
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      let data:CreateUserDTO = req.body;
      const user = await this.userService.createUser(data);
      res.status(201).json({msg:"created successfully"});
    } catch (err) {
      next(new ApiError(500, 'Internal server error'  + err.message));
    }
  }

  async updateUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      let data:UpdateUserDTO = req.body;
      const user = await this.userService.updateUser(id, data);
      res.status(200).json({mesg:"update user sucessfully"});
    } catch (err) {
      next(new ApiError(500, 'Internal server error'  + err.message));
    }
  }

  async delUser(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
        const result = await this.userService.delUser(id);

        if (result) {
            return res.status(204).send(); // No Content
        } else {
            return res.status(404).json({ error: 'User not found' });
        }
    } catch (err) {
      next(new ApiError(500, 'Internal server error'  + err.message));
    }
  }

}
