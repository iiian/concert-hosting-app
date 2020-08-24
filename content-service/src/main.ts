import { NestFactory } from '@nestjs/core';
import { ContentModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(ContentModule);
  app.setGlobalPrefix('api/v1');
  await app.listen(3000);
}
bootstrap();
