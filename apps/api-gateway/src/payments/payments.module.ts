import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { SubscriptionController } from "./subscription.controller";

@Module({
  providers: [PaymentsService],
  exports: [PaymentsService],
  controllers: [PaymentsController, SubscriptionController]
})
export class PaymentsModule {}
