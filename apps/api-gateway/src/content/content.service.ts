import { Injectable } from '@nestjs/common';
import {
  Client,
  Transport,
  ClientProxy,
  ClientProxyFactory,
} from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ContentService {
  private proxy: ClientProxy;
  constructor(configService: ConfigService) {
    this.proxy = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: configService.get('contentServiceHost'),
        port: configService.get('contentServicePort'),
      },
    });
  }

  authorizeContent(userId: string, contentId: string) {
    return this.proxy
      .send({ role: 'user', cmd: 'authorize-content' }, { userId, contentId })
      .toPromise();
  }

  authorizationCheck(userId: string, contentId: string) {
    return this.proxy
      .send({ role: 'user', cmd: 'authorization-check' }, { userId, contentId })
      .toPromise();
  }

  getContent(userId: string, contentReferenceId: string) {
    return this.proxy
      .send(
        { role: 'user', cmd: 'get-content' },
        { userId, contentReferenceId },
      )
      .toPromise();
  }
}
