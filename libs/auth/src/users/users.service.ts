import { Injectable, Logger } from '@nestjs/common';
import {
  ClientProxy,
  Transport,
  Client,
  ClientProxyFactory,
} from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { MicroserviceConfig } from '@rr/microservices';

export type User = any;

@Injectable()
export class UsersService {
  private logger = new Logger('UsersService auth');
  private readonly proxy: ClientProxy;

  constructor(configService: ConfigService) {
    const options = configService.get('services.users');
    this.proxy = ClientProxyFactory.create({
      transport: Transport.TCP,
      options
    });

  }

  async findOne(email: string): Promise<User> {
    const user = await this.proxy
      .send('find-one', email)
      .toPromise();
    this.logger.log(user);
    return user;
  }

  create(user: any): Promise<any> {
    return this.proxy
      .send('sign-up', user)
      .toPromise();
  }
}
