import { Test, TestingModule } from '@nestjs/testing';
import { VenuesServiceClient } from './venues-service-client';

describe('VenuesController', () => {
  let controller: VenuesServiceClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VenuesServiceClient],
    }).compile();

    controller = module.get<VenuesServiceClient>(VenuesServiceClient);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
