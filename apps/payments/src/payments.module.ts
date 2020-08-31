import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { ConfigModule } from '@nestjs/config';
import { RrMicroservicesModule } from '@rr/microservices';

@Module({
  imports: [ConfigModule.forRoot(), RrMicroservicesModule],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
