import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from '@rr/auth/users/users.service';
import { ConfigModule } from '@nestjs/config';
import { JwtService, JwtModule } from '@nestjs/jwt';
import { AuthService } from '@rr/auth/auth/auth.service';

describe('AppController', () => {
  let appController: UsersController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule, JwtModule.register({ secret: 'foo-bar'})],
      controllers: [UsersController],
      providers: [UsersService, AuthService],
    }).compile();

    appController = app.get<UsersController>(UsersController);
  });

  describe('todo', () => it('todo', () => {}));
});
