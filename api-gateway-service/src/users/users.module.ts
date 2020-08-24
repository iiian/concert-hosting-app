import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { ClientsModule } from '@nestjs/microservices';
import { UsersController } from './users.controller';
import { ContentModule } from 'src/content/content.module';

@Module({ 
  imports: [ClientsModule, ContentModule],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule {}
