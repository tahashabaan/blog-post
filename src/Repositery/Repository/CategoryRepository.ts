import Category from "@/models/category";
import { CreateCategoryDTO, CategoryDTO } from "@/Dtos/categoryDto";
import { ICategory } from "@/Interface";

import { injectable } from "tsyringe";
// import { Category } from "../models/Category";

@injectable()
export default class CategoryRepository {
  public async create(data: any) {
    const category = new Category(data);
    return category.save();
  }

  public async findById(id: string) {
    return Category.findById(id).exec();
  }

  public async findAll() {
    return Category.find().exec();
  }

  public async update(id: string, data: any) {
    return Category.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  public async delete(id: string) {
    return Category.findByIdAndDelete(id).exec();
  }
}
