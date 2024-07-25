import { inject, injectable } from "tsyringe";
import { BloggingRepository } from "../Repositery/Repository/BlogRepository";

@injectable()
export default class BloggingService {
  constructor(
    @inject(BloggingRepository) private bloggingRepository: BloggingRepository
  ) {}

  public async createBlog(data: any) {
    return this.bloggingRepository.create(data);
  }

  public async getBlogById(id: string) {
    return this.bloggingRepository.findById(id);
  }

  public async getBlogs() {
    return this.bloggingRepository.findAll();
  }

  public async updateBlog(id: string, data: any) {
    return this.bloggingRepository.update(id, data);
  }

  public async deleteBlog(id: string) {
    return this.bloggingRepository.delete(id);
  }

  public async getBlogsByCategory(categoryId: string) {
    return this.bloggingRepository.findByCategory(categoryId);
  }

  public async getBlogsByAuthor(authorId: string) {
    return this.bloggingRepository.findByAuthor(authorId);
  }
}
