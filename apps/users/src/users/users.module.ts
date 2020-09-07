import { Module } from '@nestjs/common';
import { UsersController } from './controllers/users.controller';
import { UsersService } from './services/users.service';
import { UserEntity } from './models/user-entity';
import { rootConfig } from '../../../../config';
import { ConfigModule } from '@nestjs/config';
import { getDbOrmImports } from '@rr/microservices';

@Module({
  imports: [
    ConfigModule.forRoot(rootConfig),
    ...getDbOrmImports('users', UserEntity)
  ],
  providers: [UsersService],
  exports: [UsersService],
  controllers: [UsersController],
})
export class UsersModule {}
