import { Injectable } from '@nestjs/common';
import { Client, Transport, ClientProxy } from '@nestjs/microservices';

@Injectable()
export class ContentService {
  @Client({
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8878
    }
  })
  private proxy: ClientProxy;

  authorizeContent(userId: string, contentId: string) {
    return this.proxy.send(
      { role: 'user', cmd: 'authorize-content' },
      { userId, contentId }
    ).toPromise();
  }
}
