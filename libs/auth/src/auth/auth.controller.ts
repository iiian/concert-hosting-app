import {
  Controller,
  Post,
  Request,
  UseGuards,
  Param,
  Logger,
  Body,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';
import { CreditServiceClient, PaymentsServiceClient } from '@rr/microservices';

@Controller('auth')
export class AuthController {
  logger = new Logger('AuthController');
  constructor(
    private readonly authService: AuthService,
    private readonly creditsServiceClient: CreditServiceClient,
    private readonly paymentsServiceClient: PaymentsServiceClient,
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
    this.paymentsServiceClient.pauseSubscription(newUserId);
    this.creditsServiceClient.create(newUserId, 1);
  }
}
