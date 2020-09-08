import { Logger, Type } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { Transport } from '@nestjs/microservices';
import { MicroserviceConfig } from './service-config';

export interface BootstrapConfiguration {
  name: string;
  module: any;
}

export async function bootstrapRPCMicroservice({
  name,
  module,
}: BootstrapConfiguration) {
  const logger = new Logger(name);
  const app = await NestFactory.create(module, { logger });
  const configService = app.get<ConfigService>(ConfigService);
  const { host, port } = configService.get<MicroserviceConfig>(
    `services.${name}`,
  );
  app.connectMicroservice({
    transport: Transport.TCP,
    options: { host, port },
  });
  await app.startAllMicroservices(() => {
    logger.log(`${name} alive on ${host}:${port}`);
  });
}
