import {
  Body,
  Controller,
  Get,
  Post,
  Param,
  ParseIntPipe,
  Patch,
  Delete,
} from '@nestjs/common';
import { AddNewUserDto } from './dto/addNewUser.dto';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { updateUserDto } from './dto/updateUser.dto';
import { UserService } from './user.service';

@Controller()
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  getUsers() {
    return this.userService.getUsers();
  }

  @Get('/:userId')
  findAnyUser(@Param('userId') userId: number) {
    return this.userService.findAnyUser(userId);
  }

  @Post('/')
  addNewUser(@Body() addNewUserDto: AddNewUserDto) {
    return this.userService.addNewUser(addNewUserDto);
  }
  //     @Post('login')
  @Patch('/:userId')
  updateAnyUser(
    @Body() updateUserDto: updateUserDto,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.updateAnyUser(updateUserDto, userId);
  }
  //     @Delete('me')
  //     @Delete('me')
  @Delete('/:userId')
  delete(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.deleteAnyUser(userId);
  }
  //     @Get('deleteAll')
}
