import { NestFactory } from '@nestjs/core';
import { ContentModule } from './content.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

const PORT = 8878;
const logger = new Logger('ContentService');

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ContentModule, {
    transport: Transport.TCP,
    options: {
      host: '127.0.0.1',
      port: PORT
    }
  });
  await app.listen(() => {
    logger.log('Listening on port ' + PORT);
  });
}
bootstrap();
