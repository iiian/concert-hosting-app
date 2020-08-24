import { Injectable, Logger } from '@nestjs/common';
import { UsersService, User } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  private readonly logger = new Logger('AuthService');
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    // @TODO: bcryptify
    if (user && user.password === password) {
      const { password, ...anonUser } = user;
      return anonUser;
    }
    return null;
  }

  async login({ username, id }: User): Promise<any> {
    const payload = { username, sub: id };
    return { access_token: this.jwtService.sign(payload) };
  }
}
