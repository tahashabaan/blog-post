import { Comment } from "@/models/";

// import { CreateCommentDTO, CommentDTO } from "@/Dtos/commentDto";

import { IComment } from "@/Interface";

import { injectable } from "tsyringe";
// import { Comment } from "../models/Comment";

@injectable()
export default class CommentRepository {
  public async create(data: any) {
    const comment = new Comment(data);
    return comment.save();
  }

  public async findById(id: string) {
    return Comment.findById(id).exec();
  }

  public async findByPostId(postId: string) {
    return Comment.find({ post: postId }).populate("user").exec();
  }

  public async update(id: string, data: any) {
    return Comment.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  public async delete(id: string) {
    return Comment.findByIdAndDelete(id).exec();
  }

  public async findAll() {
    return Comment.find();
  }
}
