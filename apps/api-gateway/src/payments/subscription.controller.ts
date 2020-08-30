import { Controller, Post, Body } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { USERS_ROUTE } from 'apps/api-gateway/route.constants';

@Controller(`${USERS_ROUTE}/:id/subscription`)
export class SubscriptionController {
  constructor(private paymentsService: PaymentsService) {}
  @Post()
  // TODO add Guard for being called by someone who has permissions to call it?
  onSubscriptionCreated(@Body() subscription: any) {}

  @Post('pause')
  // TODO add Guard for being called by someone who has permissions to call it?
  onSubscriptionPaused(@Body() subscription: any) {}
}
