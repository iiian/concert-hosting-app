import { Module } from '@nestjs/common';
import { VenuesService } from './service/venues.service';
import { ConfigModule } from '@nestjs/config';
import { VenuesController } from './venues.controller';
import { rootConfig } from 'config';

@Module({
  imports: [ConfigModule.forRoot(rootConfig)],
  providers: [VenuesService],
  controllers: [VenuesController],
})
export class VenuesModule {}
