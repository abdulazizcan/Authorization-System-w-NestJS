import { Body, Controller, Get, Post } from '@nestjs/common';
import { createSecureServer } from 'http2';
import { AddNewUserDto } from './dto/addNewUser.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  //     @Get('me')
 @Post('/')
 addNewUser(@Body() addNewUserDto: AddNewUserDto){
 return this.userService.addNewUser(addNewUserDto)
 }
  //     @Post('login')
  //     @Patch(':id')
  //     @Delete('me')
  //     @Delete('me')
  //     @Delete(':id')
  //     @Get('deleteAll')
}
