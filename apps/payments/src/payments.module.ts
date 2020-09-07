import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { ConfigModule } from '@nestjs/config';
import { RrMicroservicesModule } from '@rr/microservices';
import { rootConfig } from 'config';

@Module({
  imports: [ConfigModule.forRoot(rootConfig), RrMicroservicesModule],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
