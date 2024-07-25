import CommentRepository from "@/Repositery/Repository/CommentReository";
import { injectable, inject } from "tsyringe";

@injectable()
export default class CommentService {
  constructor(
    @inject(CommentRepository) private commentRepository: CommentRepository
  ) {}

  async createComment(data: any) {
    return this.commentRepository.create(data);
  }

  async getCommentById(id: string) {
    return this.commentRepository.findById(id);
  }

  async getComments() {
    return this.commentRepository.findAll();
  }

  async updateComment(id: string, data: any) {
    return this.commentRepository.update(id, data);
  }

  async deleteComment(id: string) {
    return this.commentRepository.delete(id);
  }
}
