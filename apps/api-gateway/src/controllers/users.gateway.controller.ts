import { Controller, Get, UseGuards, Param, Post, Body } from '@nestjs/common';
import { USERS_ROUTE, UID } from 'apps/api-gateway/route.constants';
import { JwtAuthGuard } from '@rr/auth';
import { CreditService, TransactionType } from '@rr/microservices';

@Controller(USERS_ROUTE)
export class UsersController {
  constructor(private creditService: CreditService) {}
  
  @Get(`/:${UID}/credits`)
  @UseGuards(JwtAuthGuard)
  getCredits(@Param(UID) userId: string) {
    return this.creditService.getCredits(userId);
  }

  /*TODO: kill!!!!!! this is a test api. */
  @Post(`/:${UID}/credits`)
  @UseGuards(JwtAuthGuard)
  transactCredits(@Param(UID) userId: string, @Body('amount') amount: number) {
    return this.creditService.transactCredits(userId, TransactionType.SPEND, amount);
  }
}
