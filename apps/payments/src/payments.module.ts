import { Module } from '@nestjs/common';
import { AppController } from './payments.controller';
import { AppService } from './payments.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [AppService],
})
export class PaymentsModule {}
