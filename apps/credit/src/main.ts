import { NestFactory } from '@nestjs/core';
import { CreditModule } from './credit/credit.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const NAME = 'CreditService';

async function bootstrap() {
  const logger = new Logger(NAME);
  const app = await NestFactory.create(CreditModule, { logger });
  const configService = app.get<ConfigService>(ConfigService);
  const host = configService.get('creditServiceHost');
  const port = configService.get('creditServicePort');
  app.connectMicroservice({
    transport: Transport.TCP,
    options: { host, port },
  });
  await app.startAllMicroservices(() => {
    logger.log(`${NAME} alive on ${host}:${port}`);
  });
}

bootstrap();
