import { Router } from "express";

import UserController from "@/api/userApi";

export default class UserRoute {
  private userControle: UserController;
  private router: Router;
  constructor() {
    this.router = Router();
    this.userControle = new UserController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .route("/user")
      .get(this.userControle.getUsers.bind(this.userControle))
      .post(this.userControle.createUser.bind(this.userControle));

    this.router
      .route("/user/:id")
      .get(this.userControle.getUserById.bind(this.userControle))
      .put(this.userControle.updateUser.bind(this.userControle))
      .delete(this.userControle.delUser.bind(this.userControle));
  }
}
