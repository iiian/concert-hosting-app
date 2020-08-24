import { Injectable } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport, Client } from '@nestjs/microservices';

export type User = any;

@Injectable()
export class UsersService {
  @Client({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8877
    }
  })
  private readonly proxy: ClientProxy;

  constructor() {
  }

  async findOne(username: string): Promise<User> {
    const user = await this.proxy
      .send({ role: 'user', cmd: 'get' }, username)
      .toPromise();
    return user;
  }
}
