import { Request, Response, NextFunction } from "express";

import { IBlog } from "@/Interface/IBlog";
import queryRepository from "@/Repositery/queryRepository";
import ApiError from "@/Utils/ApiError";

export default class BlogController {
  constructor(private readonly query: queryRepository<IBlog>) {}

  async getBlogs(req: Request, res: Response, next: NextFunction) {
    try {
      const blogs = await this.query.findAll();
      res.status(200).json(blogs);
    } catch (error) {
      next(new ApiError(400, " Error in getting blogs"));
    }
  }

  async createBlog(req: Request, res: Response, next: NextFunction) {
    try {
      const blog = await this.query.create(req.body);
      res.status(201).json(blog);
    } catch (error) {
      next(new ApiError(400, " Error in creating blog"));
    }
  }

  async getBlog(req: Request, res: Response, next: NextFunction) {
    try {
      const blog = await this.query.findById(req.params.id);
      res.status(200).json(blog);
    } catch (error) {
      next(new ApiError(400, " Error in getting blog"));
    }
  }

  async updateBlog(req: Request, res: Response, next: NextFunction) {
    try {
      const blog = await this.query.update(req.params.id, req.body);
      res.status(200).json(blog);
    } catch (error) {
      next(new ApiError(400, " Error in updating blog"));
    }
  }

  async deleteBlog(req: Request, res: Response, next: NextFunction) {
    try {
      const blog = await this.query.delete(req.params.id);
      res.status(200).json(blog);
    } catch (error) {
      next(new ApiError(400, " Error in deleting blog"));
    }
  }
}
