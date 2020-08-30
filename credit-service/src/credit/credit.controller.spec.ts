import { Test, TestingModule } from '@nestjs/testing';
import { CreditController } from './credit.controller';

describe('AppController', () => {
  let appController: CreditController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CreditController],
      providers: [],
    }).compile();

    appController = app.get<CreditController>(CreditController);
  });
});
