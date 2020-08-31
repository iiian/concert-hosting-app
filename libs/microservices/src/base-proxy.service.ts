import { Injectable, Logger, Type } from '@nestjs/common';
import { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
import { camelCase, paramCase } from 'change-case';

export interface BaseProxyService {
  logger: Logger;
  proxy: ClientProxy;
}
export const BaseProxyService = (serviceConfigPrefix: string): Type<BaseProxyService> => {
  serviceConfigPrefix += 'Service';

  @Injectable()
  class BaseProxyService {
    /*
     * @TODO: 
     * uh, so what happens when this gets instantiated on N different processes, 
     * and we can't tell which belongs to who? 
     * shi
     */
    public logger: Logger;
    public proxy: ClientProxy;

    constructor(configService: ConfigService) {
      this.logger = new Logger(`${paramCase(serviceConfigPrefix)}`);
      this.proxy = ClientProxyFactory.create({
        transport: Transport.TCP,
        options: {
          host: configService.get(`${camelCase(serviceConfigPrefix)}.host`),
          port: configService.get(`${camelCase(serviceConfigPrefix)}.port`)
        }
      });
      this.logger.log(`${camelCase(serviceConfigPrefix)} is alive`);
    }
  }

  return BaseProxyService;
};
