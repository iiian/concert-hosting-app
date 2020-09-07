import { StripeModule } from './stripe.module';
import { bootstrap } from '@rr/microservices';

bootstrap({
  name: 'stripe',
  module: StripeModule
});