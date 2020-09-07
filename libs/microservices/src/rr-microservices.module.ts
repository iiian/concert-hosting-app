import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaymentsServiceClient } from './payments-service-client';
import { ContentServiceClient } from './content-service-client';
import { VenuesServiceClient } from './venues-service-client';
import { CreditServiceClient } from './credit-service-client';

@Module({
  imports: [ConfigModule],
  providers: [PaymentsServiceClient, ContentServiceClient, VenuesServiceClient, CreditServiceClient],
  exports: [PaymentsServiceClient, ContentServiceClient, VenuesServiceClient, CreditServiceClient]
})
export class RrMicroservicesModule {}
