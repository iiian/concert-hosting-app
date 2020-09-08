import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from './api-gateway.module';
import { bootstrapHttpService } from '@rr/microservices';
import { DocumentBuilder } from '@nestjs/swagger';

bootstrapHttpService({
  name: 'apiGateway',
  module: ApiGatewayModule,
  versionNumber: 1,
  documentOptions: new DocumentBuilder()
    .setTitle('Reflective-Refuge API')
    .setDescription('The reflective refuge paywall and venues API')
    .setVersion('1.0')
    .addTag('venues')
    .build(),
});
