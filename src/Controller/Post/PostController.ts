import { Request, Response, NextFunction } from "express";

import queryRepository from "@/Repositery/queryRepository";
import ApiError from "@/Utils/ApiError";
import { IPost } from "@/Interface/Post/IPost";

export default class PostController {
  constructor(private readonly query: queryRepository<IPost>) {}
  async createPost(req: Request, res: Response, next: NextFunction) {
    try {
      const post = await this.query.create(req.body);
      res.status(201).json({ status: "sucess", data: post });
    } catch (error) {
      next(new ApiError(400, "error in create post"));
    }
  }

  async readPosts(req: Request, res: Response, next: NextFunction) {
    try {
      const posts = await this.query.findAll();
      res.status(200).json({ status: "sucess", data: posts });
    } catch (error) {
      next(new ApiError(400, "error in read posts"));
    }
  }

  async readPost(req: Request, res: Response, next: NextFunction) {
    try {
      const post = await this.query.findById(req.params.id);
      res.status(200).json({ status: "sucess", data: post });
    } catch (error) {
      next(new ApiError(400, "error in read post"));
    }
  }

  async updatePost(req: Request, res: Response, next: NextFunction) {
    try {
      const post = await this.query.update(req.params.id, req.body);
      res.status(200).json({ status: "sucess", data: post });
    } catch (error) {
      next(new ApiError(400, "error in update post"));
    }
  }

  async deletePost(req: Request, res: Response, next: NextFunction) {
    try {
      const post = await this.query.delete(req.params.id);
      res.status(200).json({ status: "sucess", data: post });
    } catch (error) {
      next(new ApiError(400, "error in delete post"));
    }
  }
}
