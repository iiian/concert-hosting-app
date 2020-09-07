import { Module } from '@nestjs/common';
import { CreditController } from './credit.controller';
import { CreditService } from './credit.service';
import { ConfigModule } from '@nestjs/config';
import { rootConfig } from 'config';

@Module({
  imports: [ConfigModule.forRoot(rootConfig)],
  controllers: [CreditController],
  providers: [CreditService],
})
export class CreditModule {}
