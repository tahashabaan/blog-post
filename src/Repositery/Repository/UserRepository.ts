// repository layer enable to work with database directly
import { CreateUserDTO, UpdateUserDTO, UserDTO } from "@/Dtos/userDto";
import { User } from "@/models/";
import ApiError from "@/Utils/ApiError";

import { injectable } from "tsyringe";
// import { User } from "../models/User";

@injectable()
export default class UserRepository {
  public async create(data: CreateUserDTO) {
    try{
      const user = new User(data);
      return user.save();
    } catch(err){
      throw new ApiError(400, err.message )
    }
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

  public async update(id: string, data: UpdateUserDTO) {
    return User.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  public async delete(id: string) {
    return await User.findByIdAndDelete(id).exec();
  }
}
