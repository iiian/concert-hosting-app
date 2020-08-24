import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { AuthController } from './auth/auth.controller';
import { ContentModule } from './content/content.module';
import { UsersModule } from './users/users.module';
import { UsersController } from './users/users.controller';

@Module({
  imports: [AuthModule, UsersModule, ContentModule],
  controllers: [AuthController, UsersController]
})
export class AppModule {}
