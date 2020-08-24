import { Controller, UseGuards, Logger } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';

@Controller('auth')
export class AppController {
  private logger: Logger = new Logger('AppController');
  constructor(private authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @MessagePattern('login')
  async login(req) {
    this.logger.log(req);
    return await this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @MessagePattern('hello')
  sayHello() {
    return { msg: 'hello' };
  }
}
