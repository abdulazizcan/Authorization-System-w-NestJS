import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './db/user.entity';
import { AddNewUserDto } from './dto/addNewUser.dto';
import { recodePassword } from './utils/bcrypt';
import { updateUserDto } from './dto/updateUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  getUsers(): Promise<User[]> {
    return this.usersRepository.find();
  }

  addNewUser(AddNewUserDto: AddNewUserDto) {
    const password = recodePassword(AddNewUserDto.password);
    const newUser = this.usersRepository.create({ ...AddNewUserDto, password });
    return this.usersRepository.save(newUser);
  }

  updateAnyUser(updateUserDto: updateUserDto, userId: number) {
    return this.usersRepository.update(userId, updateUserDto);
  }

  findAnyUser(userId: number) {
    return this.usersRepository.findOne({ where: { id: userId } });
  }

  deleteAnyUser(userId: number){
    return this.usersRepository.delete(userId);
  }
}
