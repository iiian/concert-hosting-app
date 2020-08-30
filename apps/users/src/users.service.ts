import { Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

export type User = any;

@Injectable()
export class UsersService {
  private logger = new Logger('UsersService ms');
  private readonly users: User[];

  constructor() {
    this.users = [
      {
        userId: 1,
        username: 'john',
        password: 'changeme',
      },
      {
        userId: 2,
        username: 'chris',
        password: 'secret',
      },
      {
        userId: 3,
        username: 'maria',
        password: 'guess',
      },
    ];
  }

  async findOne(username: string): Promise<User> {
    const user = this.users.find(user => user.username === username);
    if (!user) {
      throw new RpcException('User not found');
    }
    this.logger.log(user);
    return user;
  }
}
