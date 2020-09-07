import { Test, TestingModule } from '@nestjs/testing';
import { UsersServiceClient } from './users-service-client';
import { ConfigModule } from '@nestjs/config';

describe('UsersService', () => {
  let service: UsersServiceClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [UsersServiceClient],
    }).compile();

    service = module.get<UsersServiceClient>(UsersServiceClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
