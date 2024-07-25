import { Router } from "express";

import CommentController from "@/api/commentAPI";

export default class CommentRoute {
  private commentControle: CommentController;
  private router: Router;
  constructor() {
    this.router = Router();
    this.commentControle = new CommentController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .route("/comment")
      .get(this.commentControle.getComments.bind(this.commentControle))
      .post(this.commentControle.createComment.bind(this.commentControle));

    this.router
      .route("/comment/:id")
      .get(this.commentControle.getCommentById.bind(this.commentControle))
      .put(this.commentControle.updateComment.bind(this.commentControle))
      .delete(this.commentControle.delComment.bind(this.commentControle));
  }
}
