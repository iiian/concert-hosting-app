import { CreditModule } from './credit.module';
import { bootstrapRPCMicroservice } from '@rr/microservices';

bootstrapRPCMicroservice({
  name: 'credit',
  module: CreditModule,
});
