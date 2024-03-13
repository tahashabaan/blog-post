import { Router, Request, Response, NextFunction } from "express";
import CommentController from "@/Controller/Comment/CommentController";

export default class CommentRoute {
  private router: Router = Router();
  constructor(private readonly commentController: CommentController) {
    this.getRoutes();
  }

  public getRoutes() {
    this.router
      .route("/comment")
      .post((req: Request, res: Response, next: NextFunction) =>
        this.commentController.createComment(req, res, next)
      )
      .get((req: Request, res: Response, next: NextFunction) =>
        this.commentController.readComments(req, res, next)
      );
    this.router
      .route("/comment/:id")
      .get((req: Request, res: Response, next: NextFunction) =>
        this.commentController.readComment(req, res, next)
      )
      .put((req: Request, res: Response, next: NextFunction) =>
        this.commentController.updateComment(req, res, next)
      )
      .delete((req: Request, res: Response, next: NextFunction) =>
        this.commentController.deleteComment(req, res, next)
      );
    return this.router;
  }
}
