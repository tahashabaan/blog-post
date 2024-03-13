import { Request, Response, NextFunction } from "express";

import queryRepository from "@/Repositery/queryRepository";
import { ICategory } from "../../Interface/Category/ICategory";
import ApiError from "@/Utils/ApiError";

export class CategoryController {
  constructor(private readonly query: queryRepository<ICategory>) {}

  async createCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const category = await this.query.create(req.body);
      res.status(201).json(category);
    } catch (error) {
      next(new ApiError(400, "Category not created" + error.mesa()));
    }
  }

  async readCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = await this.query.findAll();
      res.status(200).json(categories);
    } catch (error) {
      next(new ApiError(400, "Categories not found" + error));
    }
  }

  async readCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const category = await this.query.findById(req.params.id);
      res.status(200).json(category);
    } catch (error) {
      next(new ApiError(400, "Category not found"));
    }
  }

  async updateCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const category = await this.query.update(req.params.id, req.body);
      res.status(200).json(category);
    } catch (err) {
      new ApiError(400, "Category not updated");
    }
  }

  async deleteCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const category = await this.query.delete(req.params.id);
      res.status(200).json(category);
    } catch (error) {
      next(new ApiError(400, "Category not deleted"));
    }
  }
}
