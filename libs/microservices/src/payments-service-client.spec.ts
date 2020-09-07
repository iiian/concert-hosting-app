import { Test, TestingModule } from '@nestjs/testing';
import { PaymentsServiceClient } from './payments-service-client';
import { ConfigModule } from '@nestjs/config';

describe('PaymentsService', () => {
  let service: PaymentsServiceClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule],
      providers: [PaymentsServiceClient],
    }).compile();

    service = module.get<PaymentsServiceClient>(PaymentsServiceClient);
  });

  it('should be defined', () => {
    // expect(service).toBeDefined();
  });
});
