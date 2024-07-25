import CategoryRepository from "@/Repositery/Repository/CategoryRepository";
import { inject, injectable } from "tsyringe";

@injectable()
export default class CategoryService {
  constructor(
    @inject(CategoryRepository) private categoryRepository: CategoryRepository
  ) {}
  public async createCategory(data: any) {
    return this.categoryRepository.create(data);
  }

  public async getCategoryById(id: string) {
    return this.categoryRepository.findById(id);
  }

  public async getCategories() {
    return this.categoryRepository.findAll();
  }

  public async updateCategory(id: string, data: any) {
    return this.categoryRepository.update(id, data);
  }

  public async deleteCategory(id: string) {
    return this.categoryRepository.delete(id);
  }
}
