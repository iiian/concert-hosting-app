import { Injectable, Logger } from '@nestjs/common';
import {
  ClientProxy,
  Transport,
  ClientProxyFactory,
} from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { MicroserviceConfig } from '@rr/microservices';

export type User = any;

@Injectable()
export class UsersServiceClient {
  private logger = new Logger('UsersService auth');
  private readonly proxy: ClientProxy;

  constructor(configService: ConfigService) {
    this.proxy = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: configService.get<MicroserviceConfig>('services.users'),
    });
  }

  async findOne(email: string): Promise<User> {
    const user = await this.proxy.send('find-one-by-email', email).toPromise();
    this.logger.log(user);
    return user;
  }

  async exists(id: string): Promise<boolean> {
    return this.proxy.send('exists-by-id', id).toPromise();
  }

  create(user: any): Promise<any> {
    return this.proxy.send('sign-up', user).toPromise();
  }

  attachExternalId(userId: string, externalId: string) {
    return this.proxy.send('assign-external-id', [userId, externalId]).toPromise();
  }
}
