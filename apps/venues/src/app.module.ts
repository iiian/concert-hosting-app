import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { VenuesModule } from './venues/venues.module';
import { VenuesService } from './venues/service/venues.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [VenuesModule, ConfigModule.forRoot()],
  controllers: [AppController],
  providers: [VenuesService],
})
export class AppModule {}
