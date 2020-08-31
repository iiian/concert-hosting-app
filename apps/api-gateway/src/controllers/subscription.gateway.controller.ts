import { Controller, Post, Body, Get, UseGuards, Param } from '@nestjs/common';
import { USERS_ROUTE, UID } from '../../route.constants';
import { PaymentsService } from '@rr/microservices';
import { JwtAuthGuard } from '@rr/auth';

@Controller(`${USERS_ROUTE}/:${UID}/subscription`)
export class SubscriptionController {
  constructor(private paymentsService: PaymentsService) {}
  @Post()
  // TODO add Guard for being called by someone who has permissions to call it?
  onSubscriptionCreated(@Param(UID) userId) {
    return this.paymentsService.activateSubscription(userId);
  }

  @Post('pause')
  // TODO add Guard for being called by someone who has permissions to call it?
  onSubscriptionPaused(@Param(UID) userId) {
    return this.paymentsService.pauseSubscription(userId);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  // TODO add Guard for being called by someone who has permissions to call it?
  getSubscriptionStatus(@Param(UID) userId) {
    return this.paymentsService.getSubscriptionStatus(userId);
  }
}
