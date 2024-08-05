import { Request, Response, NextFunction, Router } from "express";
import PostController from "../Controller/Post/PostController";

export default class PostRoute {
  private router: Router;
  constructor(private readonly postController: PostController) {
    this.router = Router();
    this.initialRoutes();
  }

  initialRoutes() {
    this.router
      .route("/post")
      .post((req: Request, res: Response, next: NextFunction) =>
        this.postController.createPost(req, res, next)
      )
      .get((req: Request, res: Response, next: NextFunction) =>
        this.postController.readPosts(req, res, next)
      );

    this.router
      .route("/post/:id")
      .get((req: Request, res: Response, next: NextFunction) =>
        this.postController.readPost(req, res, next)
      )
      .put((req: Request, res: Response, next: NextFunction) =>
        this.postController.updatePost(req, res, next)
      )
      .delete((req: Request, res: Response, next: NextFunction) =>
        this.postController.deletePost(req, res, next)
      );
  }

  getRouter() {
    return this.router;
  }
}
