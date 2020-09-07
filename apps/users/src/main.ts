
import { UsersModule } from './users/users.module';
import { bootstrap } from '@rr/microservices';

bootstrap({
  name: 'users',
  module: UsersModule
});