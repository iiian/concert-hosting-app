import { Controller, Logger, Param } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { CreditService } from './credit.service';

@Controller()
export class CreditController {
  logger = new Logger('CreditController');

  constructor(private creditService: CreditService) {}

  @MessagePattern('transact')
  transact([userId, amount]: [string, number]) {
    return this.creditService.transact(userId, amount)
  }

  @MessagePattern('get')
  getCreditsForUser(userId: string) {
    return this.creditService.getBalance(userId);
  }
}
