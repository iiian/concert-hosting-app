import { PaymentsModule } from './payments.module';
import { bootstrapRPCMicroservice } from '@rr/microservices';

bootstrapRPCMicroservice({
  name: 'payments',
  module: PaymentsModule,
});
