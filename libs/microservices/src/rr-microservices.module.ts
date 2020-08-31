import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaymentsService } from './payments.service';
import { ContentService } from './content.service';
import { VenuesService } from './venues.service';
import { CreditService } from './credit.service';

@Module({
  imports: [ConfigModule],
  providers: [PaymentsService, ContentService, VenuesService, CreditService],
  exports: [PaymentsService, ContentService, VenuesService, CreditService]
})
export class RrMicroservicesModule {}
