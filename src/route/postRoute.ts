import { Router } from "express";

import PostController from "@/api/postAPI";

export default class PostRoute {
  private postControle: PostController;
  private router: Router;
  constructor() {
    this.router = Router();
    this.postControle = new PostController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .route("/post")
      .get(this.postControle.getPosts.bind(this.postControle))
      .post(this.postControle.createPost.bind(this.postControle));

    this.router
      .route("/post/:id")
      .get(this.postControle.getPostById.bind(this.postControle))
      .put(this.postControle.updatePost.bind(this.postControle))
      .delete(this.postControle.delPost.bind(this.postControle));
  }
}
