import { NextFunction, Request, Response } from "express";

import queryRepository from "@/Repositery/queryRepository";
import { ITag } from "@/Interface/Post/ITag";
import ApiError from "@/Utils/ApiError";

export default class TagController {
  constructor(private readonly query: queryRepository<ITag>) {}

  async createTag(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.query.create(req.body);
    } catch (err) {
      next(new ApiError(400, "faild create tag"));
    }
  }

  async getTags(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.query.findAll();
      res.status(200).json(data);
    } catch (err) {
      next(new ApiError(400, "faild get tags"));
    }
  }

  async getTag(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.query.findById(req.params.id);
      res.status(200).json(data);
    } catch (err) {
      next(new ApiError(400, "faild get tag"));
    }
  }

  async updateTag(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.query.update(req.params.id, req.body);
      res.status(200).json(data);
    } catch (err) {
      next(new ApiError(400, "faild update tag"));
    }
  }

  async deleteTag(req: Request, res: Response, next: NextFunction) {
    try {
      const data = await this.query.delete(req.params.id);
      res.status(200).json(data);
    } catch (err) {
      next(new ApiError(400, "faild delete tag"));
    }
  }
}
