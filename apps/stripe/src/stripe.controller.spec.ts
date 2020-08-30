import { Test, TestingModule } from '@nestjs/testing';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';

describe('AppController', () => {
  let appController: StripeController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [StripeController],
      providers: [StripeService],
    }).compile();

    appController = app.get<StripeController>(StripeController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});
