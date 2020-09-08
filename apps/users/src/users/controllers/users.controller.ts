import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from '../services/users.service';
import { User } from '@rr/auth/users/users-service-client';

@Controller()
export class UsersController {
  constructor(private userService: UsersService) {}

  @MessagePattern('find-one-by-email')
  get(username: string): Promise<User> {
    return this.userService.findOneByEmail(username);
  }

  @MessagePattern('exists-by-id')
  existsById(id: string): Promise<boolean> {
    return this.userService.existsById(id);
  }

  @MessagePattern('sign-up')
  signUp(user): Promise<string> {
    return this.userService.save(user);
  }

  @MessagePattern('assign-external-id')
  assignExternalId([userId, externalId]: [string, string]) {
    return this.userService.assignExternalId(userId, externalId);
  }
}
