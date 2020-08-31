import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PaymentsService } from './payments.service';
import { ContentService } from './content.service';
import { VenuesService } from './venues.service';

@Module({
  imports: [ConfigModule],
  providers: [PaymentsService, ContentService, VenuesService],
  exports: [PaymentsService, ContentService, VenuesService]
})
export class RrMicroservicesModule {}
