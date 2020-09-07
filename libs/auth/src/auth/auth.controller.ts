import { Controller, Post, Request, UseGuards, Param, Logger, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { CreditService } from '@rr/microservices';

@Controller('auth')
export class AuthController {
  logger = new Logger('AuthController');
  constructor(
    private readonly authService: AuthService,
    private readonly creditsService: CreditService
  ) {}

  @Post('login')
  @UseGuards(LocalAuthGuard)
  login(@Param('user') user): Promise<any> {
    this.logger.log(user);
    return this.authService.login(user);
  }

  @Post('signup')
  async signup(@Body() user): Promise<any> {
    this.logger.log(`${user.email} is signing up`);
    const newUserId = await this.authService.signup(user);
    this.creditsService.create(newUserId, 1);
  }
}
