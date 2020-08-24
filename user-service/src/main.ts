import { NestFactory } from '@nestjs/core';
import { UsersModule } from './users.module';
import { Logger } from '@nestjs/common';
import { Transport } from '@nestjs/microservices';

const logger = new Logger('UserServiceMain');
async function bootstrap() {
  const app = await NestFactory.createMicroservice(UsersModule, {
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
