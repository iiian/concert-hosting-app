import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { Strategy } from 'passport-local';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  private logger = new Logger('lib.auth.local.strategy');
  constructor(private authService: AuthService) {
    super({ passReqToCallback: true });
  }

  async validate(
    request: any,
    username: string,
    password: string,
  ): Promise<any> {
    const user = await this.authService.validateUser(username, password);
    if (!user) {
      throw new UnauthorizedException();
    }
    request.params.user = user;

    return user;
  }
}
