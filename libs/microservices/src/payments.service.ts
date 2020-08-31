import { Injectable } from '@nestjs/common';
import { BaseProxyService } from './base-proxy.service';

@Injectable()
export class PaymentsService extends BaseProxyService('Payments') {
  createPayment(userId: string, amount: number): any {
    return this.proxy.send('create-payment', [userId, amount]).toPromise();
  }

  pauseSubscription(userId: string) {
    return this.proxy.send('pause-subscription', userId).toPromise();
  }

  activateSubscription(userId: string) {
    return this.proxy.send('activate-subscription', userId).toPromise();
  }

  getSubscriptionStatus(userId: string) {
    return this.proxy.send('get-subscription-status', userId).toPromise();
  }
}
