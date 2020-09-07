import { Controller, Post, Request, UseGuards, Param, Logger, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('auth')
export class AuthController {
  logger = new Logger('AuthController');
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Param('user') user): Promise<any> {
    this.logger.log(user);
    return this.authService.login(user);
  }

  @Post('signup')
  signup(@Body() user): Promise<any> {
    this.logger.log(`${user.email} is signing up`);
    return this.authService.signup(user);
  }
}
