import { inject, injectable } from "tsyringe";
import UserRepository from "@/Repositery/Repository/UserRepository";

@injectable()
export default class UserService {
  constructor(@inject(UserRepository) private userRepository: UserRepository) {}
  async createUser(data: any) {
    return this.userRepository.create(data);
  }

  async getUserByEmail(email: any) {
    return this.userRepository.findByEmail(email);
  }
  async getUser(id: string) {
    return this.userRepository.findById(id);
  }
  async delUser(id: string) {
    return this.userRepository.delete(id);
  }
  async updateUser(id: string, data: any) {
    return this.userRepository.update(id, data);
  }
  async getAllUsers() {
    return this.userRepository.findAll();
  }
}
