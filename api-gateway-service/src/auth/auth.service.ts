import { Injectable, Logger } from '@nestjs/common';
import { ClientProxyFactory, ClientProxy, Transport } from '@nestjs/microservices';

@Injectable()
export class AuthService {
  private readonly logger = new Logger('AuthService');
  private proxy: ClientProxy;
  constructor() {
    this.proxy = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '127.0.0.1',
        port: 8877
      }
    });
  }

  login(body): Promise<any> {
    return this.proxy
      .send('login', { body })
      .toPromise();
  }
}
