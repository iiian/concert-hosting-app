import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';
import { ConfigModule } from '@nestjs/config';
import { rootConfig } from 'config';
import { getDbOrmImports, RrMicroservicesModule } from '@rr/microservices';
import { UsersModule } from '@rr/auth';
import { StripeEventEntity } from './stripe-event-entity';

@Module({
  imports: [
    ConfigModule.forRoot(rootConfig),
    UsersModule,
    RrMicroservicesModule,
    ...getDbOrmImports('stripe', [StripeEventEntity])
  ],
  controllers: [StripeController],
  providers: [StripeService],
})
export class StripeModule {}
