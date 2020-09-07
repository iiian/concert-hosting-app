import { Injectable, Logger, Type } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { camelCase, paramCase } from 'change-case';
import { MicroserviceConfig } from './service-config';

export interface BaseServiceClient {
  logger: Logger;
  proxy: ClientProxy;
}
export const BaseServiceClient = (serviceName: string): Type<BaseServiceClient> => {
  @Injectable()
  class BaseServiceClient {
    /*
     * @TODO: 
     * uh, so what happens when this gets instantiated on N different processes,
     * and we can't tell which belongs to who?
     */
    public logger: Logger;
    public proxy: ClientProxy;

    constructor(configService: ConfigService) {
      this.logger = new Logger(`${paramCase(serviceName)}`);
      const microConfig = configService.get<MicroserviceConfig>(`services.${camelCase(serviceName)}`)
      this.proxy = ClientProxyFactory.create({
        transport: Transport.TCP,
        options: microConfig
      });
      this.logger.log(`${camelCase(serviceName)} proxied to ${microConfig.host}:${microConfig.port}`);
    }
  }

  return BaseServiceClient;
};
