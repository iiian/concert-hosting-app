import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ClientsModule } from '@nestjs/microservices';
import { ContentController } from './content.controller';

@Module({
  imports: [ClientsModule],
  providers: [ContentService],
  exports: [ContentService],
  controllers: [ContentController]
}) export class ContentModule {}
