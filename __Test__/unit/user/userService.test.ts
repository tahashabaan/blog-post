import 'reflect-metadata';
import { container } from 'tsyringe';
import UserService from '@/Services/UserServive';
import UserRepository from '@/Repositery/Repository/UserRepository';
import ApiError from '@/Utils/ApiError';
import mongoose, { Document, ObjectId } from 'mongoose';
import { IUser } from '@/Interface';
import { User } from '@/models';



jest.mock('@/Repositery/Repository/UserRepository');

describe('UserService', () => {
  let userService: UserService;
  let userRepository: jest.Mocked<UserRepository>;

  const user = {
    name: 'John Doe',
    email: 'john@example.com',
    password:"123456",
    comments: [],
    posts: [],
    role: 'user'
  };

  beforeEach(() => {
    userRepository = new UserRepository() as jest.Mocked<UserRepository>;
    container.registerInstance(UserRepository, userRepository);
    userService = container.resolve(UserService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });



  describe('createUser', () => {
    it('should create a new user', async () => {

        //name email password
      // const user = {name: 'John Doe', email: 'john@example.com', password:'123456' };

      userRepository.create.mockResolvedValue(User.hydrate(user));

      const result = await userService.createUser(user);
      expect(result).toMatchObject(user);
      expect(userRepository.create).toHaveBeenCalledWith(user);
    });

    it('should throw an error if user cannot be created', async () => {
      userRepository.create.mockRejectedValue(new ApiError(400,'Error creating user'));

      await expect(userService.createUser({name:"fhd", password:'6354', email:"efgyef"})).rejects.toThrow('Error creating user');
    });
  });

  describe('getUserById', () => {
    it('should return the user by id', async () => {
     

      userRepository.findById.mockResolvedValue(User.hydrate(user));

      const result = await userService.getUser('1');
      expect(result).toMatchObject(user);
      expect(userRepository.findById).toHaveBeenCalledWith('1');
    });


    it('should throw an error if user is not found', async () => {
        userRepository.findById.mockResolvedValue(null);
  
        await expect(userService.getUser('1')).rejects.toThrow('User not found');


      });

  });


  describe('updateUser', () => {


    it('should update the user', async () => {
      // const user = {
      //   name: 'John Doe',
      //   email: 'tahashabaan48@gmail.com'
      // };

      userRepository.update.mockResolvedValue(User.hydrate(user));

      const result = await userService.updateUser('1', user);

      expect(result).toContain(user);
      expect(userRepository.update).toHaveBeenCalledWith('1', user);

    });

    it('should throw an error if user is not found', async () => {
      userRepository.update.mockResolvedValue(null);

      await expect(userService.updateUser('1', {name: 'John Doe', email: 'tahashabaan48@gamil.com'})).rejects.toThrow('User not found');
    } );

  } );  
  // More tests for updateUser and deleteUser...

  describe('deleteUser', () => {
    it('should delete the user', async () => {
      // const user = {name: 'John Doe', email: 'tahashabaan48@gmail.com'};
      userRepository.delete.mockResolvedValue(User.hydrate(user));
      const result = await userService.delUser('1');
      expect(result).toMatchObject(user);
      expect(userRepository.delete).toHaveBeenCalledWith('1');
    });

    it('should throw an error if user is not found', async () => {
      userRepository.delete.mockResolvedValue(null);
      await expect(userService.delUser('1')).rejects.toThrow('User not found');
    });
  } );


});
