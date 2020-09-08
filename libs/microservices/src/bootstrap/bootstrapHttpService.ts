import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ApiGatewayModule } from 'apps/api-gateway/src/api-gateway.module';
import { ConfigService } from '@nestjs/config';
import { MicroserviceConfig } from '..';
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from '@nestjs/swagger';

export interface BootstrapHttpServiceConfig {
  name: string;
  versionNumber: number;
  module: any;
  documentOptions?: Pick<
    OpenAPIObject,
    | 'components'
    | 'openapi'
    | 'info'
    | 'servers'
    | 'security'
    | 'tags'
    | 'externalDocs'
  >;
}

export async function bootstrapHttpService(config: BootstrapHttpServiceConfig) {
  const logger: Logger = new Logger(config.name);
  const app = await NestFactory.create(config.module, { logger });
  const configService = app.get<ConfigService>(ConfigService);
  app.setGlobalPrefix(`api/v${config.versionNumber}`);
  const { port } = configService.get<MicroserviceConfig>(
    `services.${config.name}`,
  );
  if (config.documentOptions) {
    const document = SwaggerModule.createDocument(app, config.documentOptions);
    SwaggerModule.setup('api', app, document);
  }
  await app.listen(port);
  logger.log(`${config.name} alive on :${port}`);
}
