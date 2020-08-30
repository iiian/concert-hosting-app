import { Module } from '@nestjs/common';
import { VenuesService } from './service/venues.service';
import { ConfigModule } from '@nestjs/config';
import { VenuesController } from 'apps/api-gateway/src/venues/venues.controller';

@Module({
  imports: [ConfigModule.forRoot()],
  providers: [VenuesService],
  controllers: [VenuesController]
})
export class VenuesModule {}
