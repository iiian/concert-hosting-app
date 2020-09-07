import { CreditModule } from './credit.module';
import { bootstrap } from '@rr/microservices';

bootstrap({
  name: 'credit',
  module: CreditModule
});