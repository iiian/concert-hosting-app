import { Controller } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreditService, TransactionType } from '@rr/microservices';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class PaymentsController {
  constructor(
    private readonly paymentsService: PaymentsService,
    private readonly creditService: CreditService
  ) {}

  @MessagePattern('activate-subscription')
  activateSubscription(userId: string) {
    return this.paymentsService.activateSubscription(userId);
  }

  @MessagePattern('cancel-subscription')
  cancelSubscription(userId: string) {
    this.paymentsService.pauseSubscription(userId);
  }

  @MessagePattern('create-payment')
  async createPayment([userId, amount]: [string, number]) {
    const { creditValue } = await this.paymentsService.createPayment(userId, amount);
    await this.creditService.transactCredits(userId, TransactionType.GRANT, creditValue);
    return 'ok';
  }

  @MessagePattern('get-subscription-status')
  async getSubscriptionStatus(userId: string) {
    return this.paymentsService.getSubscriptionStatus(userId);
  }
}
