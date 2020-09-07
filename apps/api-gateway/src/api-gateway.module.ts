import { Module } from '@nestjs/common';
import { AuthModule, AuthController, UsersModule } from '@rr/auth';
import { RrMicroservicesModule } from '@rr/microservices';
import { ConfigModule } from '@nestjs/config';
import { VenuesController } from './controllers/venues.gateway.controller';
import { PaymentsController } from './controllers/payments.gateway.controller';
import { SubscriptionController } from './controllers/subscription.gateway.controller';
import { ContentController } from './controllers/content.gateway.controller';
import { UsersController } from './controllers/users.gateway.controller';
import { rootConfig } from 'config';

@Module({
  imports: [
    ConfigModule.forRoot(rootConfig),
    RrMicroservicesModule,
    AuthModule,
  ],
  controllers: [
    AuthController,
    VenuesController,
    PaymentsController,
    SubscriptionController,
    ContentController,
    UsersController,
  ],
})
export class ApiGatewayModule {}
