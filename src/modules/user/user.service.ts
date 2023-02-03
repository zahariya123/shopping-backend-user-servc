/* eslint-disable prettier/prettier */
/* eslint-disable prefer-const */


import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserDto } from 'src/submodules/shopping-backend-dto/src/dtos/user.dto';
import { User } from 'src/submodules/shopping-backend-entities/src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User) 
    private userRepository: Repository<User>
  ){}
 
  async createUser(user: UserDto){
     
    try{
      let userEntity = this.userRepository.create(user)
      let createdUser = await this.userRepository.save(userEntity);
      return createdUser;
    }
    catch(err){
      throw err
    }


  }

  async fetchUserByEmail(email: string){
    try{

    let user = await this.userRepository.createQueryBuilder("user")
                                        .where(`user.email = '${email}'`) 
                                        .getOne()
                                        console.log({user})

     if(user)
       return user;
      else
     return null;                                 
    }
  catch(err){
    throw err;
  }
  }


  async findAll(){
    try{
      let retrievedUsers = await this.userRepository.find();
      return retrievedUsers;
    }
    catch(err){
      throw err
    }
  }

  async updateUser(user: UserDto){
    try{
      let updateResult = await this.userRepository.update(user.id,user);
      return updateResult;
    }
    catch(err){
      throw err
    }
  }

  async deleteUser(userId: number){
    try{
      let deletedUser = await this.userRepository.delete(userId);
      return deletedUser;
    }
    catch(err){
      throw err
    }
  }
}