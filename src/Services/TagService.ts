import TagRepository from "@/Repositery/Repository/TagRepository";
import { injectable, inject } from "tsyringe";

@injectable()
export default class TagService {
  constructor(@inject(TagRepository) private tagRepository: TagRepository) {}
  async createTag(data: any) {
    return this.tagRepository.create(data);
  }

  async getTagById(id: string) {
    return this.tagRepository.findById(id);
  }

  async getTags() {
    return this.tagRepository.findAll();
  }

  async updateTag(id: string, data: any) {
    return this.tagRepository.update(id, data);
  }

  async deleteTag(id: string) {
    return this.tagRepository.delete(id);
  }
}
