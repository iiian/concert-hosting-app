import { Module } from '@nestjs/common';
import { VenuesService } from './venues.service';
import { VenuesController } from './venues.controller';

@Module({
  providers: [VenuesService],
  controllers: [VenuesController]
})
export class VenuesModule {}
