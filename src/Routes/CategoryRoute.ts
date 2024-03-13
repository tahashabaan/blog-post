import { CategoryController } from "@/Controller/Category/CategoryController";
import { NextFunction, Router, Request, Response } from "express";

export default class CategoryRoute {
  private router: Router = Router();
  constructor(private readonly categoryController: CategoryController) {
    this.getRoutes();
  }

  public getRoutes() {
    this.router
      .route("/category")
      .post((req: Request, res: Response, next: NextFunction) =>
        this.categoryController.createCategory(req, res, next)
      )
      .get((req: Request, res: Response, next: NextFunction) =>
        this.categoryController.readCategories(req, res, next)
      );

    this.router
      .route("/category/:id")
      .get((req: Request, res: Response, next: NextFunction) =>
        this.categoryController.readCategory(req, res, next)
      )
      .put((req: Request, res: Response, next: NextFunction) =>
        this.categoryController.updateCategory(req, res, next)
      )
      .delete((req: Request, res: Response, next: NextFunction) =>
        this.categoryController.deleteCategory(req, res, next)
      );
    return this.router;
  }
}
