import { Router } from "express";

import CategoryController from "@/api/categoryAPI";

export default class CategoryRoute {
  private categoryControle: CategoryController;
  private router: Router;
  constructor() {
    this.router = Router();
    this.categoryControle = new CategoryController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .route("/category")
      .get(this.categoryControle.getCategories.bind(this.categoryControle))
      .post(this.categoryControle.createCategory.bind(this.categoryControle));

    this.router
      .route("/category/:id")
      .get(this.categoryControle.getCategoryById.bind(this.categoryControle))
      .put(this.categoryControle.updateCategory.bind(this.categoryControle))
      .delete(this.categoryControle.delCategory.bind(this.categoryControle));
  }
}
// Compare this snippet from src/route/categoryRoute.ts:
