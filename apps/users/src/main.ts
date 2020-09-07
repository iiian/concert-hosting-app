
import { UsersModule } from './users/users.module';
import { bootstrap } from '@rr/microservices';
import * as bcrypt from 'bcrypt';

bootstrap({
  name: 'users',
  module: UsersModule
});