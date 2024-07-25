import { Blogging } from "@/models";
import { IBlog } from "@/Interface";
import {
  BloggingDTO,
  CreateBloggingDTO,
  UpdateBloggingDTO,
} from "@/Dtos/BlogignDto";

import { injectable } from "tsyringe";
// import { Blogging } from '../models/Blogging';

@injectable()
export class BloggingRepository {
  public async create(data: any) {
    const blogging = new Blogging(data);
    return blogging.save();
  }

  public async findById(id: string) {
    return Blogging.findById(id).exec();
  }

  public async findAll() {
    return Blogging.find().exec();
  }

  public async update(id: string, data: any) {
    return Blogging.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  public async delete(id: string) {
    return Blogging.findByIdAndDelete(id).exec();
  }

  public async findByCategory(id) {
    return Blogging.findOne({ categories: { $elemMatch: { _id: id } } }).exec();
  }

  public async findByAuthor(id) {
    return Blogging.findOne({ user: id });
  }
}
