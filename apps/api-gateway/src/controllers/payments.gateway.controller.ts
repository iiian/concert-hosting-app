import {
  Controller,
  Post,
  Body,
  Param,
  HttpException,
  UseGuards,
} from '@nestjs/common';
import { USERS_ROUTE, UID } from '../../route.constants';
import { PaymentsServiceClient } from '@rr/microservices';
import { UsersServiceClient } from '@rr/auth/users/users-service-client';
import { LocalAuthGuard } from '@rr/auth/auth/local-auth.guard';
import { UserExistsGuard } from '@rr/auth/auth/user-exists.guard';

@Controller(`${USERS_ROUTE}/:${UID}/payments`)
export class PaymentsController {
  constructor(private paymentsService: PaymentsServiceClient) {}

  @Post()
  @UseGuards(UserExistsGuard)
  // @TODO add Guard for being called by someone who has permissions to call it?
  async onPaymentOccured(
    @Param(UID) userId: string,
    @Body('amount') amount: number,
  ) {
    return this.paymentsService.createPayment(userId, amount);
  }
}
