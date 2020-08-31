import { NestFactory } from '@nestjs/core';
import { ContentModule } from './content.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { camelCase } from 'change-case';

const NAME = 'ContentService';
const camelNAME = camelCase(NAME);

async function bootstrap() {
  const logger = new Logger(NAME);
  const app = await NestFactory.create(ContentModule, { logger });
  const configService = app.get<ConfigService>(ConfigService);
  const host = configService.get(`${camelNAME}.host`);
  const port = configService.get(`${camelNAME}.port`);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: { host, port },
  });
  await app.startAllMicroservices(() => {
    logger.log(`${NAME} alive on ${host}:${port}`);
  });
}

bootstrap();
