import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';

const NAME = 'UsersService';

async function bootstrap() {
  const logger = new Logger(NAME);
  const app = await NestFactory.create(UsersModule, { logger });
  const configService = app.get<ConfigService>(ConfigService);
  const host = configService.get('usersService.host');
  const port = configService.get('usersService.port');
  app.connectMicroservice({
    transport: Transport.TCP,
    options: { host, port },
  });
  await app.startAllMicroservices(() => {
    logger.log(`${NAME} alive on ${host}:${port}`);
  });
}

bootstrap();
