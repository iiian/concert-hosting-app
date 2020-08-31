import { Test, TestingModule } from '@nestjs/testing';
import { VenuesService } from './venues.service';

describe('VenuesController', () => {
  let controller: VenuesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VenuesService],
    }).compile();

    controller = module.get<VenuesService>(VenuesService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
