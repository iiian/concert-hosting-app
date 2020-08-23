import { Injectable } from '@nestjs/common';
import { UsersService, User } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.userService.findOne(username);
    // @TODO: bcryptify
    if (user.password === password) {
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
