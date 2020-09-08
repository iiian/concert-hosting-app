import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LocalStrategy } from './local.strategy';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersServiceClient } from '../users/users-service-client';
import { UsersModule } from '../users/users.module';
import { RrMicroservicesModule } from '@rr/microservices';
import { UserExistsGuard } from './user-exists.guard';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    RrMicroservicesModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return {
          secret: configService.get<string>('authJwtModuleOptions.secret'),
          signOptions: {
            expiresIn: configService.get<string>(
              'authJwtModuleOptions.signOptions.expiresIn',
            ),
          },
        };
      },
    }),
    ConfigModule,
  ],
  providers: [
    AuthService,
    UsersServiceClient,
    JwtStrategy,
    JwtAuthGuard,
    LocalStrategy,
    LocalAuthGuard,
    UserExistsGuard,
  ],
  controllers: [AuthController],
  exports: [UsersModule, AuthService, JwtAuthGuard, UserExistsGuard],
})
export class AuthModule {}
