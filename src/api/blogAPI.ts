import { container } from "tsyringe";
import { Request, Response, NextFunction } from "express";
import BloggingService from "@/Services/BloggingService";
import ApiError from "@/Utils/ApiError";

export default class BlogAPI {
  private bloggingService: BloggingService;
  constructor() {
    this.bloggingService = container.resolve(BloggingService);
  }

  async getBlogs(req: Request, res: Response, next: NextFunction) {
    try {
      const blogs = this.bloggingService.getBlogs();
      res.status(201).json(blogs);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async getBlogById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const blog = this.bloggingService.getBlogById(id);
      res.status(200).json(blog);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async createBlog(req: Request, res: Response, next: NextFunction) {
    try {
      const blog = this.bloggingService.createBlog(req.body);
      res.status(201).json(blog);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async updateBlog(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const blog = this.bloggingService.updateBlog(id, req.body);
      res.status(200).json(blog);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async delBlog(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const blog = this.bloggingService.deleteBlog(id);
      res.status(204).send();
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }
}
