import { Controller, Post, Body, Param } from '@nestjs/common';
import { USERS_ROUTE, UID } from '../../route.constants';
import { PaymentsService } from '@rr/microservices';

@Controller(`${USERS_ROUTE}/:${UID}/payments`)
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Post()
  // TODO add Guard for being called by someone who has permissions to call it?
  onPaymentOccured(@Param(UID) userId: string, @Body('amount') amount: number) {
    return this.paymentsService.createPayment(userId, amount);
  }
}
