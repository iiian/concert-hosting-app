import { Test, TestingModule } from '@nestjs/testing';
import { CreditController } from './credit.controller';
import { CreditService } from './credit.service';

describe('CreditController', () => {
  let appController: CreditController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CreditController],
      providers: [CreditService],
    }).compile();

    appController = app.get<CreditController>(CreditController);
  });

  describe('/*@TODO*/', () => it('run', () => {}));
});
