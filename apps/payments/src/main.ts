import { NestFactory } from '@nestjs/core';
import { PaymentsModule } from './payments.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const NAME = 'PaymentsService';

async function bootstrap() {
  const logger = new Logger(NAME);
  const app = await NestFactory.create(PaymentsModule, { logger });
  const configService = app.get<ConfigService>(ConfigService);
  const host = configService.get('paymentsService.host');
  const port = configService.get('paymentsService.port');
  app.connectMicroservice({
    transport: Transport.TCP,
    options: { host, port },
  });
  await app.startAllMicroservices(() => {
    logger.log(`${NAME} alive on ${host}:${port}`);
  });
}

bootstrap();
