import { NestFactory } from '@nestjs/core';
import { VenuesModule } from './venues/venues.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

const NAME = 'VenuesService';

async function bootstrap() {
  const logger = new Logger(NAME);
  const app = await NestFactory.create(VenuesModule, { logger });
  const configService = app.get<ConfigService>(ConfigService);
  const host = configService.get('venuesService.host');
  const port = configService.get('venuesService.port');
  app.connectMicroservice({
    transport: Transport.TCP,
    options: { host, port },
  });
  await app.startAllMicroservices(() => {
    logger.log(`${NAME} alive on ${host}:${port}`);
  });
}

bootstrap();
