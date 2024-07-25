import { container } from "tsyringe";
import { Request, Response, NextFunction } from "express";
import CommentService from "@/Services/commentService";
import ApiError from "@/Utils/ApiError";

export default class CommentAPI {
  private commentService: CommentService;
  constructor() {
    this.commentService = container.resolve(CommentService);
  }

  async getComments(req: Request, res: Response, next: NextFunction) {
    try {
      const comments = this.commentService.getComments();
      res.status(201).json(comments);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async getCommentById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const comment = this.commentService.getCommentById(id);
      res.status(200).json(comment);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async createComment(req: Request, res: Response, next: NextFunction) {
    try {
      const comment = this.commentService.createComment(req.body);
      res.status(201).json(comment);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async updateComment(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const comment = this.commentService.updateComment(id, req.body);
      res.status(200).json(comment);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async delComment(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const comment = this.commentService.deleteComment(id);
      res.status(204).send();
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }
}
