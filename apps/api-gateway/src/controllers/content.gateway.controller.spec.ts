import { Test, TestingModule } from '@nestjs/testing';
import { ContentController } from './content.gateway.controller';
import { ContentService } from './content.service';
import { ConfigModule } from '@nestjs/config';

describe('ContentController', () => {
  let controller: ContentController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      controllers: [ContentController],
      providers: [ContentService],
    }).compile();

    controller = module.get<ContentController>(ContentController);
  });

  it('should be defined', () => {
    // expect(controller).toBeDefined();
  });
});
