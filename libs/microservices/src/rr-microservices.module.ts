import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaymentsServiceClient } from './service-clients/payments-service-client';
import { ContentServiceClient } from './service-clients/content-service-client';
import { VenuesServiceClient } from './service-clients/venues-service-client';
import { CreditServiceClient } from './service-clients/credit-service-client';

@Module({
  imports: [ConfigModule],
  providers: [
    PaymentsServiceClient,
    ContentServiceClient,
    VenuesServiceClient,
    CreditServiceClient,
  ],
  exports: [
    PaymentsServiceClient,
    ContentServiceClient,
    VenuesServiceClient,
    CreditServiceClient,
  ],
})
export class RrMicroservicesModule {}
