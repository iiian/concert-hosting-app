import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import {
  Injectable,
  Logger,
  UnauthorizedException,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private logger = new Logger('lib.auth.jwt.strategy');
  constructor(configService: ConfigService) {
    super({
      passReqToCallback: true,
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: configService.get<string>('authJwtModuleOptions.secret'),
    });
  }

  async validate(req: any, payload: any) {
    if (req.params.uid !== undefined && req.params.uid !== payload.sub) {
      this.logger.log(
        `authz failure: ${payload.email} is not authorized to take actions against user ${req.params.uid}`,
      );
      throw new UnauthorizedException(
        `${payload.email} is not authorized to take actions against user ${req.params.uid}`,
      );
    }

    return { userId: payload.sub, email: payload.email };
  }
}
