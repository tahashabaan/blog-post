import { container } from "tsyringe";
import { Request, Response, NextFunction } from "express";
import PostService from "@/Services/postService";
import ApiError from "@/Utils/ApiError";

export default class PostAPI {
  private postService: PostService;
  constructor() {
    this.postService = container.resolve(PostService);
  }

  async getPosts(req: Request, res: Response, next: NextFunction) {
    try {
      const posts =await this.postService.getPosts();
      res.status(201).json(posts);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async getPostById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const post = await this.postService.getPostById(id);
      res.status(200).json(post);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async createPost(req: Request, res: Response, next: NextFunction) {
    try {
      const post =await this.postService.createPost(req.body);
      res.status(201).json(post);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async updatePost(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const post = await this.postService.updatePost(id, req.body);
      res.status(200).json(post);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async delPost(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const post = await this.postService.deletePost(id);
      res.status(204).send();
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }
}
