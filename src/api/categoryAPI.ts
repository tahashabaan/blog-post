import { container } from "tsyringe";
import { Request, Response, NextFunction } from "express";
import CategoryService from "@/Services/categoryService";
import ApiError from "@/Utils/ApiError";


export default class CategoryAPI {
  private categoryService: CategoryService;
  constructor() {
    this.categoryService = container.resolve(CategoryService);
  }

  async getCategories(req: Request, res: Response, next: NextFunction) {
    try {
      const categories = this.categoryService.getCategories();
      res.status(201).json(categories);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async getCategoryById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const category = this.categoryService.getCategoryById(id);
      res.status(200).json(category);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async createCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const category = this.categoryService.createCategory(req.body);
      res.status(201).json(category);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async updateCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const category = this.categoryService.updateCategory(id, req.body);
      res.status(200).json(category);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async delCategory(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const category = this.categoryService.deleteCategory(id);
      res.status(204).send();
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }
}