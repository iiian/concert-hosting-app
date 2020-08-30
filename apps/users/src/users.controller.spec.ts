import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('AppController', () => {
  let appController: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [],
    }).compile();

    appController = app.get<UsersController>(UsersController);
  });
});
