import { Module } from '@nestjs/common';
import { VenuesService } from './service/venues.service';

@Module({
  providers: [VenuesService]
})
export class VenuesModule {}
