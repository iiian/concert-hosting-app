import { NestFactory } from '@nestjs/core';
import { StripeModule } from './stripe.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

const NAME = 'StripeService';

async function bootstrap() {
  const logger = new Logger(NAME);
  const app = await NestFactory.create(StripeModule, { logger });
  const configService = app.get<ConfigService>(ConfigService);
  const host = configService.get('stripeService.host');
  const port = configService.get('stripeService.port');
  app.connectMicroservice({
    transport: Transport.TCP,
    options: { host, port },
  });
  await app.startAllMicroservices(() => {
    logger.log(`${NAME} alive on ${host}:${port}`);
  });
}

bootstrap();
