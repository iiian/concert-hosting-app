import { Module } from '@nestjs/common';
import { ContentService } from './content.service';
import { ClientsModule } from '@nestjs/microservices';
import { ContentController } from './content.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, ClientsModule],
  providers: [ContentService],
  exports: [ContentService],
  controllers: [ContentController],
})
export class ContentModule {}
