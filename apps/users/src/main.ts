import { UsersModule } from './users/users.module';
import { bootstrapRPCMicroservice } from '@rr/microservices';

bootstrapRPCMicroservice({
  name: 'users',
  module: UsersModule,
});
