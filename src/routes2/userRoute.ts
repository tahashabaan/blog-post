import { NextFunction, Request, Response, Router } from "express";

import UserController from "@/Controller/User/userController";

export default class UserRoute {
  private router: Router;

  constructor(private userController: UserController) {
    // this.userController = new UserController();
    this.router = Router();
    this.initailRoutes();
  }

  private initailRoutes() {
    this.router
      .route("/users")
      .get((req: Request, res: Response, next: NextFunction) =>
        this.userController.readUsers(req, res, next)
      )
      .post((req: Request, res: Response, next: NextFunction) =>
        this.userController.createUser(req, res, next)
      );
    this.router
      .route("/user/:id")
      .get((req: Request, res: Response, next: NextFunction) =>
        this.userController.readUser(req, res, next)
      )
      .put((req: Request, res: Response, next: NextFunction) =>
        this.userController.updateUser(req, res, next)
      )
      .delete((req: Request, res: Response, next: NextFunction) =>
        this.userController.deleteUser(req, res, next)
      );
  }

  public getRouter() {
    return this.router;
  }
  // public async createUserRoute() {
  //   return this.router.post("/users");
  // }

  // public async getUsersRoute() {
  //   return this.router.get("/users");
  // }

  // public async getUserRoute() {
  //   return this.router.get("/user/:id");
  // }

  // public async updateUserRoute() {
  //   return this.router.put("/user/:id");
  // }

  // public async deleteUserRoute() {
  //   return this.router.delete("/user/:id");
  // }
}
