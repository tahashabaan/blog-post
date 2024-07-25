// repository layer enable to work with database directly
import { CreateUserDTO, UserDTO } from "@/Dtos/userDto";
import { User } from "@/models/";

import { injectable } from "tsyringe";
// import { User } from "../models/User";

@injectable()
export default class UserRepository {
  public async create(data: any) {
    const user = new User(data);
    return user.save();
  }

  public async findAll() {
    return User.find().exec();
  }

  public async findById(id: string) {
    return User.findById(id).exec();
  }

  public async findByEmail(email: string) {
    return User.findOne({ email }).exec();
  }

  public async update(id: string, data: any) {
    return User.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  public async delete(id: string) {
    return User.findByIdAndDelete(id).exec();
  }
}
