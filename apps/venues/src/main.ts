import { VenuesModule } from './venues/venues.module';
import { bootstrap } from '@rr/microservices';

bootstrap({
  name: 'venues',
  module: VenuesModule
});