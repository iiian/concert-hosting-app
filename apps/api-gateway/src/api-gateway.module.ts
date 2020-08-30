import { Module } from '@nestjs/common';
import { AuthModule, AuthController } from '@rr/auth';
import { ConfigModule } from '@nestjs/config';
import { VenuesModule } from './venues/venues.module';
import { VenuesController } from './venues/venues.controller';
import { PaymentsModule } from './payments/payments.module';
import { PaymentsController } from './payments/payments.controller';
import { SubscriptionController } from './payments/subscription.controller';
import { ContentController } from './content/content.controller';
import { ContentModule } from './content/content.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    AuthModule,
    VenuesModule,
    PaymentsModule,
    ContentModule,
  ],
  controllers: [
    AuthController,
    VenuesController,
    PaymentsController,
    SubscriptionController,
    ContentController,
  ],
})
export class ApiGatewayModule {}
