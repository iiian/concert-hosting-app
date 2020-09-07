
import { ContentModule } from './content.module';
import { bootstrap } from '@rr/microservices';

bootstrap({
  name: 'content',
  module: ContentModule
});