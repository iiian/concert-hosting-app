import { ContentModule } from './content.module';
import { bootstrapRPCMicroservice } from '@rr/microservices';

bootstrapRPCMicroservice({
  name: 'content',
  module: ContentModule,
});
