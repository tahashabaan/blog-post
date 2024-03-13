import { Router, Request, Response, NextFunction } from "express";
import BlogController from "@/Controller/Blog/BlogController";

export default class BlogRoute {
  private router: Router = Router();
  constructor(private readonly blogController: BlogController) {
    this.getRoutes();
  }

  public getRoutes() {
    this.router
      .route("/blog")
      .post((req: Request, res: Response, next: NextFunction) =>
        this.blogController.createBlog(req, res, next)
      )
      .get((req: Request, res: Response, next: NextFunction) =>
        this.blogController.getBlogs(req, res, next)
      );
    this.router
      .route("/blog/:id")
      .get((req: Request, res: Response, next: NextFunction) =>
        this.blogController.getBlog(req, res, next)
      )
      .put((req: Request, res: Response, next: NextFunction) =>
        this.blogController.updateBlog(req, res, next)
      )
      .delete((req: Request, res: Response, next: NextFunction) =>
        this.blogController.deleteBlog(req, res, next)
      );
    return this.router;
  }
}
