import { PassportStrategy } from '@nestjs/passport' 
import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private logger: Logger = new Logger('LocalPassportStrategy');
  constructor(private authService: AuthService) { 
    super();
  }

  async validate(username: string, password: string):  Promise<any> {
    this.logger.log(`Validating ${username}`);
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      this.logger.log(`Validation failed`);
      return new UnauthorizedException();
    }
    this.logger.log(`Validation successful`);
    return user;
  }
}
