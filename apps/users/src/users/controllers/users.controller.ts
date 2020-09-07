import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from '../services/users.service';
import { User } from '@rr/auth/users/users.service';

@Controller()
export class UsersController {
  constructor(private userService: UsersService) {}

  @MessagePattern('find-one')
  get(username: string): Promise<User> {
    return this.userService.findOne(username);
  }

  @MessagePattern('sign-up')
  signUp(user: object): Promise<string> {
    return this.userService.save(user);
  }
}
