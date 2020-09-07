import { Test, TestingModule } from '@nestjs/testing';
import { CreditServiceClient } from './credit-service-client';

describe('CreditService', () => {
  let service: CreditServiceClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CreditServiceClient],
    }).compile();

    service = module.get<CreditServiceClient>(CreditServiceClient);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
