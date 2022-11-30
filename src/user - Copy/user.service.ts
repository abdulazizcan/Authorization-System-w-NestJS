import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './db/user.entity';
import * as bcrypt from 'bcrypt';
import { AddNewUserDto } from './dto/addNewUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getUsers(): Promise<User[]> {
      return this.usersRepository.find();

  }

  addNewUser(AddNewUserDto:AddNewUserDto){
  return this.usersRepository.save(AddNewUserDto)
  }
}
