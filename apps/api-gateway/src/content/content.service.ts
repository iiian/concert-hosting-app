import { Injectable } from '@nestjs/common';
import { Client, Transport, ClientProxy } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ContentService {
  constructor() {}
  @Client({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8878
    }
  }) private proxy: ClientProxy;

  authorizeContent(userId: string, contentId: string) {
    return this.proxy.send(
      { role: 'user', cmd: 'authorize-content' },
      { userId, contentId }
    ).toPromise();
  }

  authorizationCheck(userId: string, contentId: string) {
    return this.proxy.send(
      { role: 'user', cmd: 'authorization-check' },
      { userId, contentId }
    ).toPromise();
  }

  getContent(userId: string, contentReferenceId: string) {
    return this.proxy.send(
      { role: 'user', cmd: 'get-content' },
      { userId, contentReferenceId }
    ).toPromise();
  }
}
