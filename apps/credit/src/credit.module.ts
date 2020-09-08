import { Module } from '@nestjs/common';
import { CreditController } from './credit.controller';
import { CreditService } from './credit.service';
import { ConfigModule } from '@nestjs/config';
import { rootConfig } from 'config';
import { getDbOrmImports } from '@rr/microservices';
import { CreditEntity } from './credit-entity';

@Module({
  imports: [
    ConfigModule.forRoot(rootConfig),
    ...getDbOrmImports('credit', [CreditEntity]),
  ],
  controllers: [CreditController],
  providers: [CreditService],
})
export class CreditModule {}
