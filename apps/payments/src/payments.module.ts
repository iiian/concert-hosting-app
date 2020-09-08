import { Module } from '@nestjs/common';
import { PaymentsController } from './payments.controller';
import { PaymentsService } from './payments.service';
import { ConfigModule } from '@nestjs/config';
import { RrMicroservicesModule, getDbOrmImports } from '@rr/microservices';
import { rootConfig } from 'config';
import { PaymentsEntity } from './payments-entity';
import { SubscriptionEntity } from './subscription-entity';

@Module({
  imports: [
    ConfigModule.forRoot(rootConfig),
    RrMicroservicesModule,
    ...getDbOrmImports('payments', [PaymentsEntity, SubscriptionEntity]),
  ],
  controllers: [PaymentsController],
  providers: [PaymentsService],
})
export class PaymentsModule {}
