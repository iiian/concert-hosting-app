import { Test, TestingModule } from '@nestjs/testing';
import { ContentService } from './content.service';
import { ConfigModule } from '@nestjs/config';

describe('ContentService', () => {
  let service: ContentService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [ContentService],
    }).compile();

    service = module.get<ContentService>(ContentService);
  });

  it('should be defined', () => {
    // expect(service).toBeDefined();
  });
});
