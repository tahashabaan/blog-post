import { container } from "tsyringe";
import { Request, Response, NextFunction } from "express";
import TagService from "@/Services/TagService";
import ApiError from "@/Utils/ApiError";

export default class TagAPI {
  private tagService: TagService;
  constructor() {
    this.tagService = container.resolve(TagService);
  }

  async getTags(req: Request, res: Response, next: NextFunction) {
    try {
      const tags = this.tagService.getTags();
      res.status(201).json(tags);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async getTagById(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const tag = this.tagService.getTagById(id);
      res.status(200).json(tag);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async createTag(req: Request, res: Response, next: NextFunction) {
    try {
      const tag = this.tagService.createTag(req.body);
      res.status(201).json(tag);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async updateTag(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const tag = this.tagService.updateTag(id, req.body);
      res.status(200).json(tag);
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }

  async delTag(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const tag = this.tagService.deleteTag(id);
      res.status(204).send();
    } catch (err) {
      next(new ApiError(400, "something went wrong! " + err.message));
    }
  }
}
