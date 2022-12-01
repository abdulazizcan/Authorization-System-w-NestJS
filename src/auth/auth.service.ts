import {
  Injectable,
  HttpStatus,
  HttpException,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from 'src/user/user.service';
import { ComparePassword } from './utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(private userService: UserService) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    const auth = ComparePassword(password, user.password);
    const pass =  await auth.then((value)=>{
        return value;
    })
    if (user && pass) {
      return user;
    }
    return null;
  }
}
