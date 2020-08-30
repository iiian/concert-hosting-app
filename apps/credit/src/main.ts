import { NestFactory } from '@nestjs/core';
import { CreditModule } from './credit/credit.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';

const logger: Logger = new Logger('CreditService');

const host = '127.0.0.1';
const port = 8880;
async function bootstrap() {
  const app = await NestFactory.createMicroservice(CreditModule, {
    transport: Transport.TCP,
    options: { host, port }
  });
  await app.listen(() => {
    logger.log(`CreditService@${host}:${port}`);
  });
}
bootstrap();