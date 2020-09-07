import { PaymentsModule } from './payments.module';
import { bootstrap } from '@rr/microservices';

bootstrap({
  name: 'payments',
  module: PaymentsModule
});