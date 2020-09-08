import { VenuesModule } from './venues.module';
import { bootstrapRPCMicroservice } from '@rr/microservices';

bootstrapRPCMicroservice({
  name: 'venues',
  module: VenuesModule,
});
