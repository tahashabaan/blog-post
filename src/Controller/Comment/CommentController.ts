import { Request, Response, NextFunction } from "express";
import ApiError from "@/Utils/ApiError";
import { IComment } from "@/Interface/Comment/IComment";
import queryRepository from "@/Repositery/queryRepository";

export default class CommentController {
  constructor(private readonly query: queryRepository<IComment>) {}

  async createComment(req: Request, res: Response, next: NextFunction) {
    try {
      const comment = await this.query.create(req.body);
      res.status(201).json(comment);
    } catch (error) {
      next(new ApiError(400, "Comment not created"));
    }
  }

  async readComments(req: Request, res: Response, next: NextFunction) {
    try {
      const comments = await this.query.findAll();
      res.status(200).json(comments);
    } catch (error) {
      next(new ApiError(400, "Comments not found"));
    }
  }

  async readComment(req: Request, res: Response, next: NextFunction) {
    try {
      const comment = await this.query.findById(req.params.id);
      res.status(200).json(comment);
    } catch (error) {
      next(new ApiError(400, "Comment not found"));
    }
  }

  async updateComment(req: Request, res: Response, next: NextFunction) {
    try {
      const comment = await this.query.update(req.params.id, req.body);
      res.status(200).json(comment);
    } catch (err) {
      new ApiError(400, "Comment not updated");
    }
  }
  async deleteComment(req: Request, res: Response, next: NextFunction) {
    try {
      const comment = await this.query.delete(req.params.id);
      res.status(200).json(comment);
    } catch (error) {
      next(new ApiError(400, "Comment not deleted"));
    }
  }
}
