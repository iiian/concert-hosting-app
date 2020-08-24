import { Controller, Post, Request, Logger } from '@nestjs/common';
import { AuthService } from './auth/auth.service';

@Controller('auth')
export class AuthController {
  private logger: Logger = new Logger('AuthController');
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  login(@Request() req: any): Promise<any> {
    return this.authService.login(req.body);
  }
}
