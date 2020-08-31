import { Injectable } from '@nestjs/common';
import { BaseProxyService } from './base-proxy.service';

@Injectable()
export class CreditService extends BaseProxyService('Credit') {
  transactCredits(userId: string, amount: string) {
    return this.proxy
    .send('transact', [userId, amount])
    .toPromise();
  }
  getCredits(userId: string) {
    return this.proxy
      .send('get', userId)
      .toPromise();
  }
}
