import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { ClientsModule } from '@nestjs/microservices';

@Module({ 
  imports: [ClientsModule],
  providers: [UsersService],
}) export class UsersModule {}
