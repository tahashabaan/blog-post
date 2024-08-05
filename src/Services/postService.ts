import { inject, injectable } from "tsyringe";
import PostRepository from "@/Repositery/Repository/PostRepository";


@injectable()

export default class postService {
  constructor(@inject(PostRepository) private postRepository: PostRepository) {}
  async createPost(data: any) {
    return this.postRepository.create(data);
  }

  async getPostById(id: string) {
    return this.postRepository.findById(id);
  }

  async getPosts() {
    return this.postRepository.findAll();
  }

  async updatePost(id: string, data: any) {
    return this.postRepository.update(id, data);
  }

  async deletePost(id: string) {
    return this.postRepository.delete(id);
  }
}
