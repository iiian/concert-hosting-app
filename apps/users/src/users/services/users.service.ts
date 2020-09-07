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
  private saltRounds = 10;
  constructor(
    configService: ConfigService, 
    @InjectRepository(User)
    private userRepo: Repository<User>
  ) {}

  async save(email: string, password: string): Promise<User> {
    const user = new User();
    user.email = email;
    user.password = bcrypt.genSaltSync();
    // this.userRepo.save()
    return null;
  }

  async findOne(email: string): Promise<User> {
    const user = await this.userRepo.findOne({ where: { email } });
    if (!user) {
      throw new RpcException('User not found');
    }
    return user;
  }
}
