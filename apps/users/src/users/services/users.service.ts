import { Repository, FindOneOptions } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable, Logger, Inject } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { User } from '../models/user.entity';
import {} from '../../../../../config'
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  private logger = new Logger('UsersService ms');
  private readonly users: User[];
  private saltRounds: number;
  constructor(
    configService: ConfigService, 
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) {
    this.saltRounds = Number(configService.get('bcrypt.saltRounds')) || 10;
  }

  async save({ password, ...user}: any): Promise<string> {
    const userEntity = new User();
    Object
    .entries(user)
    .forEach(([key, value]) => userEntity[key] = value);
    userEntity.password = bcrypt.hashSync(password, 10);
    this.logger.log(userEntity.password);
    await this.userRepo.save(userEntity);
    return 'ok';
  }

  async findOne(email: string): Promise<User> {
    const user = await this.userRepo.findOne({ where: { email } });
    if (!user) {
      throw new RpcException('User not found');
    }
    return user;
  }
}
