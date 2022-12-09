import {
  Injectable,
  HttpStatus,
  HttpException,
  BadRequestException,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { ComparePassword } from './utils/bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.userService.findByEmail(email);
    const auth = ComparePassword(password, user.password);
    const pass = await auth.then((value) => {
      return value;
    });
    if (user && pass) {
      return user;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user.id };
    return { user, access_token: this.jwtService.sign(payload) };
  }
}
