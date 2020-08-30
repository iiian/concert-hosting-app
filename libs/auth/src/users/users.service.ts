import { Injectable, Logger } from '@nestjs/common';
import {
  ClientProxy,
  Transport,
  Client,
  ClientProxyFactory,
} from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

export type User = any;

@Injectable()
export class UsersService {
  private logger = new Logger('UsersService auth');
  private readonly proxy: ClientProxy;

  constructor(configService: ConfigService) {
    this.proxy = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: configService.get('usersServiceHost'),
        port: configService.get('usersServicePort'),
      },
    });
  }

  async findOne(username: string): Promise<User> {
    const user = await this.proxy
      .send({ role: 'user', cmd: 'get' }, username)
      .toPromise();
    this.logger.log(user);
    return user;
  }
}
