// import { CreatePostDTO, PostDTO } from "@/Dtos/postDto";
import { IPost } from "@/Interface";
// import { Post } from "@/models";
import { Post } from "@/models/";
import { injectable } from "tsyringe";
// import { Post } from '../models/Post';

@injectable()
export default class PostRepository {
  public async create(data: any) {
    const post = new Post(data);
    return post.save();
  }

  public async findById(id: string) {
    return Post.findById(id).exec();
  }

  public async findAll() {
    return Post.find().populate("user").populate("category").exec();
  }

  public async update(id: string, data: any) {
    return Post.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  public async delete(id: string) {
    return Post.findByIdAndDelete(id).exec();
  }
}
