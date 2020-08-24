import { Module } from '@nestjs/common';
import { AuthController } from './app.controller';
import { AuthService } from './auth/auth.service';
import { ClientsModule } from '@nestjs/microservices';

@Module({
  imports: [ClientsModule],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AppModule {}
