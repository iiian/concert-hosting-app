import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule],
  providers: [ContentService],
  exports: [ContentService]
})
export class ContentModule {}
