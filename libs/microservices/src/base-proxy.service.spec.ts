import { Test, TestingModule } from '@nestjs/testing';
import { BaseProxyService } from './base-proxy.service';

describe('MicroservicesService', () => {
  let service: BaseProxyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BaseProxyService],
    }).compile();

    service = module.get<BaseProxyService>(BaseProxyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
