import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

const NAME = 'APIGatewayService';

async function bootstrap() {
  const logger: Logger = new Logger(NAME);
  const app = await NestFactory.create(ApiGatewayModule, { logger });
  const configService = app.get<ConfigService>(ConfigService);
  app.setGlobalPrefix('api/v1');
  const port = configService.get<number>('apiGatewayServicePort');
  await app.listen(port);
  logger.log(`${NAME} alive on :${port}`);
}
bootstrap();
