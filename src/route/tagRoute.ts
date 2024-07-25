import { Router } from "express";

import TagController from "@/api/tagAPI";

export default class TagRoute {
  private tagControle: TagController;
  private router: Router;
  constructor() {
    this.router = Router();
    this.tagControle = new TagController();
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router
      .route("/tag")
      .get(this.tagControle.getTags.bind(this.tagControle))
      .post(this.tagControle.createTag.bind(this.tagControle));

    this.router
      .route("/tag/:id")
      .get(this.tagControle.getTagById.bind(this.tagControle))
      .put(this.tagControle.updateTag.bind(this.tagControle))
      .delete(this.tagControle.delTag.bind(this.tagControle));
  }
}
