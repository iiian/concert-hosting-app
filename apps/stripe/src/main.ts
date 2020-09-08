import { StripeModule } from './stripe.module';
import { bootstrapHttpService } from '@rr/microservices';

export const NAME = 'APIGatewayService';

bootstrapHttpService({
  name: 'stripe',
  module: StripeModule,
  versionNumber: 1,
});
