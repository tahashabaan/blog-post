import { inject, injectable } from "tsyringe";
import UserRepository from "@/Repositery/Repository/UserRepository";
import ApiError from "@/Utils/ApiError";
import { CreateUserDTO, UpdateUserDTO } from "@/Dtos/userDto";
import { IUser } from "@/Interface";

@injectable()
export default class UserService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}
  async getAllUsers() {
    return await this.userRepository.findAll();
  }

  async createUser(data: CreateUserDTO) {
    try{

      return this.userRepository.create(data);
    } catch(err){
       throw new ApiError(500, "internal server erro !"+ err.message);
    }
  }

  async getUserByEmail(email: string) {

    return await this.userRepository.findByEmail(email);
  }
  
  async getUser(id: string): Promise<IUser|undefined> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }

  async updateUser(id: string, data: UpdateUserDTO):Promise<IUser|undefined> {
    const user = await this.userRepository.update(id, data);
    if (!user) {
      throw new Error('User not upadated');
    }
    return user;
  }
  
  async delUser(id: string):Promise<IUser|undefined> {
    const user = await this.userRepository.delete(id);
    if (!user) {
      throw new Error('User not deleted');
    }
    return user;
  }
}
