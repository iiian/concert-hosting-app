import { Module } from '@nestjs/common';
import { StripeController } from './stripe.controller';
import { StripeService } from './stripe.service';
import { ConfigModule } from '@nestjs/config';
import { rootConfig } from 'config';

@Module({
  imports: [ConfigModule.forRoot(rootConfig)],
  controllers: [StripeController],
  providers: [StripeService],
})
export class StripeModule {}
