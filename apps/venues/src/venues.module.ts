import { Module } from '@nestjs/common';
import { VenuesService } from './venues.service';
import { ConfigModule } from '@nestjs/config';
import { VenuesController } from './venues.controller';
import { rootConfig } from 'config';
import { getDbOrmImports } from '@rr/microservices/getDbOrmImports';
import { Venue } from './venue-entity';

@Module({
  imports: [ConfigModule.forRoot(rootConfig), ...getDbOrmImports('venues', Venue)],
  providers: [VenuesService],
  controllers: [VenuesController],
})
export class VenuesModule {}
