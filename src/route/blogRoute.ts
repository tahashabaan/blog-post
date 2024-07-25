import { Router } from "express";

import BlogController from "@/api/blogAPI";

export default class BlogRoute {
  private blogControle: BlogController;
  private router: Router;
  constructor() {
    this.router = Router();
    this.blogControle = new BlogController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .route("/blog")
      .get(this.blogControle.getBlogs.bind(this.blogControle))
      .post(this.blogControle.createBlog.bind(this.blogControle));

    this.router
      .route("/blog/:id")
      .get(this.blogControle.getBlogById.bind(this.blogControle))
      .put(this.blogControle.updateBlog.bind(this.blogControle))
      .delete(this.blogControle.delBlog.bind(this.blogControle));
  }
}
