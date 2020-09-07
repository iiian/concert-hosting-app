import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { UsersServiceClient } from '../users/users-service-client';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, JwtModule.register({ secret: 'foo-bar' })],
      providers: [AuthService, UsersServiceClient],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    // expect(service).toBeDefined();
  });
});
