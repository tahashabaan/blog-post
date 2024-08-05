import { injectable } from "tsyringe";
import { Tag } from "@/models/";
import { ITag } from "@/Interface";
import { CreateTagDTO, TagDTO } from "@/Dtos/tagDto";

@injectable()
export default class {
  constructor() {}

  public async create(tag: CreateTagDTO) {
    return await Tag.create(tag);
  }

  public async findAll() {
    return await Tag.find();
  }
  public async findById(id: any) {
    return await Tag.findById(id);
  }
  public async update(id: any, tag: any) {
    return await Tag.findByIdAndUpdate(id, tag);
  }
  public async delete(id: any) {
    return await Tag.findByIdAndDelete(id);
  }

}
