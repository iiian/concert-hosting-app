import { Test, TestingModule } from '@nestjs/testing';
import { VenuesController } from './venues.controller';
import { VenuesService } from 'apps/api-gateway/src/venues/venues.service';

describe('AppController', () => {
  let appController: VenuesController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [VenuesController],
      providers: [VenuesService],
    }).compile();

    appController = app.get<VenuesController>(VenuesController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getVenues()).toBe('Hello World!');
    });
  });
});
