import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService, User } from './users.service';

@Controller()
export class UsersController {
  constructor(private userService: UsersService) {}

  @MessagePattern({ role: 'user', cmd: 'get' })
  get(username: string): Promise<User | undefined> {
    return this.userService.findOne(username);
  }
}
