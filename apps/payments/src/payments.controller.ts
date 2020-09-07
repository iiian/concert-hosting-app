import { Controller } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { CreditServiceClient, TransactionType } from '@rr/microservices';
import { MessagePattern } from '@nestjs/microservices';
import { getCreditsForPayment } from './getCreditsForPayment';

@Controller()
export class PaymentsController {
  constructor(
    private readonly paymentsService: PaymentsService,
    private readonly creditServiceClient: CreditServiceClient
  ) {}

  @MessagePattern('activate-subscription')
  activateSubscription(userId: string) {
    return this.paymentsService.activateSubscription(userId);
  }

  @MessagePattern('pause-subscription')
  cancelSubscription(userId: string) {
    return this.paymentsService.pauseSubscription(userId);
  }

  @MessagePattern('create-payment')
  async createPayment([userId, amount]: [string, number]) {
    await this.paymentsService.createPayment(userId, amount);
    await this.creditServiceClient.transactCredits(
      userId,
      TransactionType.GRANT,
      getCreditsForPayment(amount)
    );
    return 'ok';
  }

  @MessagePattern('get-subscription-status')
  async getSubscriptionStatus(userId: string) {
    return this.paymentsService.getSubscriptionStatus(userId);
  }
}
