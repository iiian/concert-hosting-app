import {
  CanActivate,
  ExecutionContext,
  Injectable,
  HttpException,
} from '@nestjs/common';
import { Request } from 'express';
import { UsersServiceClient } from '../users/users-service-client';

@Injectable()
export class UserExistsGuard implements CanActivate {
  constructor(private userServiceClient: UsersServiceClient) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest<Request>();
    const userId = request.params['uid'];
    try {
      return await this.userServiceClient.exists(userId);
    } catch (error) {
      throw new HttpException(
        { ...error, message: `User ${userId} does not exist` },
        404,
      );
    }
  }
}
