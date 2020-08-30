import { Module } from '@nestjs/common';
import { AuthModule, AuthController } from '@rr/auth';
import { ConfigModule } from '@nestjs/config';
import { VenuesModule } from './venues/venues.module';
import { VenuesController } from './venues/venues.controller';
import { PaymentsModule } from './payments/payments.module';
import { PaymentsController } from './payments/payments.controller';
import { SubscriptionController } from "./payments/subscription.controller";

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    VenuesModule,
    PaymentsModule,
  ],
  controllers: [
    AuthController,
    VenuesController,
    PaymentsController,
    SubscriptionController,
  ],
}) export class ApiGatewayModule {}
