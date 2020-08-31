import { Injectable } from '@nestjs/common';
import { BaseProxyService } from './base-proxy.service';

export enum TransactionType {
  SPEND = 1,
  GRANT = -1
}

@Injectable()
export class CreditService extends BaseProxyService('Credit') {
  transactCredits(userId: string, type: TransactionType, amount: number) {
    return this.proxy
    .send('transact', [userId, type * amount])
    .toPromise();
  }
  getCredits(userId: string) {
    return this.proxy
      .send('get', userId)
      .toPromise();
  }
}
