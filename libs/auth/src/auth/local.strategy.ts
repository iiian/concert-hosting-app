import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private logger = new Logger('lib.auth.local.strategy');
  constructor(private authService: AuthService) {
    super({ 
      passReqToCallback: true,
      usernameField: 'email',
      passwordField: 'password'
    });
  }

  async validate(
    request: any,
    email: string,
    password: string,
  ): Promise<any> {
    this.logger.log('validating');
    const user = await this.authService.validateUser(email, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    request.params.user = user;

    return user;
  }
}
