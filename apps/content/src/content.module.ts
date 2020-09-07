import { Module } from '@nestjs/common';
import { ContentController } from './content.controller';
import { ContentService } from './content.service';
import { ConfigModule } from '@nestjs/config';
import { rootConfig } from 'config';

@Module({
  imports: [ConfigModule.forRoot(rootConfig)],
  controllers: [ContentController],
  providers: [ContentService],
})
export class ContentModule {}
