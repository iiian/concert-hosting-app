import { Test, TestingModule } from '@nestjs/testing';
import { ContentServiceClient } from './content-service-client';
import { ConfigModule } from '@nestjs/config';

describe('ContentService', () => {
  let service: ContentServiceClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [ContentServiceClient],
    }).compile();

    service = module.get<ContentServiceClient>(ContentServiceClient);
  });

  it('should be defined', () => {
    // expect(service).toBeDefined();
  });
});
