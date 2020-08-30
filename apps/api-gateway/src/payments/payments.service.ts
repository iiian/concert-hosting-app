import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class PaymentsService {
  private proxy: ClientProxy;
  constructor(configService: ConfigService) {
    this.proxy = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: configService.get('paymentsServiceHost'),
        port: configService.get('paymentsServicePort'),
      },
    });
  }
}
