import { Module } from '@nestjs/common';
import { VenuesService } from './venues.service';
import { ConfigModule } from '@nestjs/config';
import { VenuesController } from './venues.controller';
import { rootConfig } from 'config';
import { getDbOrmImports } from '@rr/microservices';
import { VenueEntity } from './venue-entity';

@Module({
  imports: [
    ConfigModule.forRoot(rootConfig),
    ...getDbOrmImports('venues', [VenueEntity]),
  ],
  providers: [VenuesService],
  exports: [VenuesService],
  controllers: [VenuesController],
})
export class VenuesModule {}
