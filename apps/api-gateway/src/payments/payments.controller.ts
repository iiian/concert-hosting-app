import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { USERS_ROUTE } from 'apps/api-gateway/route.constants';

@Controller(`${USERS_ROUTE}/:id/payments`)
export class PaymentsController {
  constructor(private paymentsService: PaymentsService) {}

  @Post()
  // TODO add Guard for being called by someone who has permissions to call it?
  onPaymentOccured(@Body() payment: any) {}
}
