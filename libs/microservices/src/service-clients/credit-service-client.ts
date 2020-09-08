import { Injectable } from '@nestjs/common';
import { BaseServiceClient } from './base-service-client';

export enum TransactionType {
  SPEND = 1,
  GRANT = -1,
}

@Injectable()
export class CreditServiceClient extends BaseServiceClient('Credit') {
  transactCredits(userId: string, type: TransactionType, amount: number) {
    return this.proxy.send('transact', [userId, type * amount]).toPromise();
  }

  getCredits(userId: string) {
    return this.proxy.send('get', userId).toPromise();
  }

  create(userId: string, defaultAmount = 0) {
    return this.proxy.send('create', [userId, defaultAmount]).toPromise();
  }
}
