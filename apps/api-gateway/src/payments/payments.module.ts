import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { SubscriptionController } from './subscription.controller';
import { ConfigModule } from '@nestjs/config';
import { ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [ConfigModule, ClientsModule],
  providers: [PaymentsService],
  exports: [PaymentsService],
  controllers: [PaymentsController, SubscriptionController],
})
export class PaymentsModule {}
