import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { NestMicroserviceOptions } from '@nestjs/common/interfaces/microservices/nest-microservice-options.interface';
import { Transport } from '@nestjs/microservices';
const logger = new Logger('AuthServiceMain');
async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: 8877
    }
  });
  await app.listen(() => {
    logger.log('listening on port 8877');
  });
}
bootstrap();
