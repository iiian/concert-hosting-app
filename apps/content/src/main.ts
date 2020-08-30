import { NestFactory } from '@nestjs/core';
import { ContentModule } from './content.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const NAME = 'ContentService';

async function bootstrap() {
  const logger = new Logger(NAME);
  const app = await NestFactory.create(ContentModule, { logger });
  const configService = app.get<ConfigService>(ConfigService);
  const host = configService.get('contentServiceHost');
  const port = configService.get('contentServicePort');
  app.connectMicroservice({
    transport: Transport.TCP,
    options: { host, port },
  })
  await app.startAllMicroservices(() => {
    logger.log(`${NAME} alive on ${host}:${port}`);
  });
}

bootstrap();
