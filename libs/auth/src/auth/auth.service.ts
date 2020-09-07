import { Injectable, Logger } from '@nestjs/common';
import { UsersService, User } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private logger = new Logger('AuthService');
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    // @TODO: bcryptify
    if (user && bcrypt.compareSync(password, user.password)) {
      const { password, ...anonUser } = user;
      return anonUser;
    }
    return null;
  }

  async login({ username, userId }: User): Promise<any> {
    this.logger.log(username, userId);
    const payload = { username, sub: userId };
    return { 
      id: userId,
      access_token: this.jwtService.sign(payload) 
    };
  }

  async signup(user: any): Promise<any> {
    return this.userService.create(user);
  }

}
