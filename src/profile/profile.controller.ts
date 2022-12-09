import { Controller, Get, UseGuards,Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ProfileService } from './profile.service';

@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}
  @UseGuards(AuthGuard('jwt'))
  @Get('userProfile')
  profile(@Request() req: any) {
    console.log(req.user)
    return this.profileService.profileLogin(req.user.username);
  }
}
