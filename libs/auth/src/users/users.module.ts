import { Module } from '@nestjs/common';
import { UsersServiceClient } from './users-service-client';
import { ClientsModule } from '@nestjs/microservices';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule, ClientsModule],
  providers: [UsersServiceClient],
  exports: [UsersServiceClient]
})
export class UsersModule {}
