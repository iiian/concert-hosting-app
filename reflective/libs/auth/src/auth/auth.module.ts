// import { Module, DynamicModule, Inject } from '@nestjs/common';
// import { PassportModule } from '@nestjs/passport';
// import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
// import { JwtStrategy } from './jwt.strategy';
// import { JwtAuthGuard } from './jwt-auth.guard';
// import { Subject } from 'rxjs';
// import { ConfigService } from '@nestjs/config';

// export type AuthModuleOptions = {
//   jwt: JwtModuleOptions;
// }

// @Module({})
// export class ReflectiveAuthModule {
//   private static _jwtModuleOptions$: Subject<JwtModuleOptions> = new Subject<JwtModuleOptions>();

//   public static async registerAsync(configService: ConfigService): Promise<DynamicModule> {
//     const jwt = configService.get<JwtModuleOptions>('authJwtModuleOptions');
//     const jwtModule = JwtModule.register(jwt);
//     console.log('saved jwt module options to the side...');
//     return {
//       module: ReflectiveAuthModule,
//       imports: [
//         PassportModule,
//         jwtModule,
//       ],
//       providers: [
//         {
//           provide: 'JWT_OPTIONS',
//           useValue: jwt,
//         },
//         JwtStrategy,
//         JwtAuthGuard,
//       ]
//     };
//   }

//   public static async getJwtModuleAsync(configService: ConfigService): Promise<DynamicModule> {
//     const jwtOptions = await ReflectiveAuthModule._jwtModuleOptions$.toPromise(); 
//     console.log(jwtOptions);
//     return JwtModule.register(jwtOptions);
//   }
// }



import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { JwtAuthGuard } from './jwt-auth.guard';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LocalStrategy } from './local.strategy';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersService } from '../users/users.service';
import { UsersModule } from '../users/users.module';

@Module({
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => {
        return ({
          secret: configService.get<string>('authJwtModuleOptions.secret'),
          signOptions: {
            expiresIn: configService.get<string>('authJwtModuleOptions.signOptions.expiresIn')
          }
        });
      }
    }),
    ConfigModule
  ],
  providers: [AuthService, UsersService, JwtStrategy, JwtAuthGuard, LocalStrategy, LocalAuthGuard],
  controllers: [AuthController],
  exports: [AuthService]
}) export class AuthModule {}
