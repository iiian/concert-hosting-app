import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);

  if (module.hot) {
    Logger.log('module is hot.')
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();