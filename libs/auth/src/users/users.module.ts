import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { ClientsModule } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, ClientsModule],
  providers: [UsersService],
})
export class UsersModule {}
