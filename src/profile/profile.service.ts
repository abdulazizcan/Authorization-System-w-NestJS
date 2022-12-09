import { Injectable } from '@nestjs/common';
import { UserService } from 'src/user/user.service';

@Injectable()
export class ProfileService {
  constructor(private userService: UserService) {}

  async profileLogin(email: string) {
    const user = await this.userService.findByEmail(email);
    return user;
  }
}
