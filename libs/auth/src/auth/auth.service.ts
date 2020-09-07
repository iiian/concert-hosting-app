import { Injectable, Logger } from '@nestjs/common';
import { UsersServiceClient, User } from '../users/users-service-client';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  private logger = new Logger('AuthService');
  constructor(
    private userService: UsersServiceClient,
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

  async login({ email, id }: User): Promise<any> {
    this.logger.log(email, id);
    const payload = { email, sub: id };
    return { id, email, access_token: this.jwtService.sign(payload) };
  }

  async signup(user: any): Promise<any> {
    return this.userService.create(user);
  }
}
