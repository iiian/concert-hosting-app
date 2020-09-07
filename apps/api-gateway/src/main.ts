import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { MicroserviceConfig } from '@rr/microservices';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

const NAME = 'APIGatewayService';

async function bootstrap() {
  const logger: Logger = new Logger(NAME);
  const app = await NestFactory.create(ApiGatewayModule, { logger });
  const configService = app.get<ConfigService>(ConfigService);
  app.setGlobalPrefix('api/v1');
  const { port } = configService.get<MicroserviceConfig>('services.apiGateway');
  const options = new DocumentBuilder()
    .setTitle('Reflective-Refuge API')
    .setDescription('The reflective refuge paywall and venues API')
    .setVersion('1.0')
    .addTag('venues')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);
  await app.listen(port);
  logger.log(`${NAME} alive on :${port}`);
}
bootstrap();
