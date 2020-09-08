import { Injectable } from '@nestjs/common';
import { BaseServiceClient } from './base-service-client';

@Injectable()
export class PaymentsServiceClient extends BaseServiceClient('Payments') {
  attachSubscriptionExternalId(userId: any, externalSubscriptionId: any) {
    return this.proxy.send('attach-external-subscription-id', [userId, externalSubscriptionId]).toPromise();
  }
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
