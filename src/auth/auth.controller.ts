import {
  Controller,
  Post,
  Body,
  HttpStatus,
  HttpException,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { ComparePassword } from './utils/bcrypt';

@Controller('auth')
export class AuthController {
  loginDto: any;
  constructor(private userService: UserService) {}

  @Post('/login')
  async login(@Body() loginDto: any) {
    const user = await this.userService.findByEmail(loginDto.email);
    console.log(user);
    console.log(loginDto.password);
    if (user) {
      const auth = ComparePassword(loginDto.password, user.password);
      if (!auth) {
        throw new BadRequestException('Something bad happened', {
          cause: new Error(),
          description: 'your password is not correct',
        });
      }else{
        return user;
      }
    } else {
      throw new BadRequestException('Something bad happened', {
        cause: new Error(),
        description: 'the user did not find. E-mail you write can be wrong.',
      });
    }
  }
}
