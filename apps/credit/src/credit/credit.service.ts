import { Injectable } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';

@Injectable()
export class CreditService {
  userCredits = {
    ['1']: 1,
    ['2']: 0,
  };

  transact(userId: string, amount: number) {
    if (!(userId in this.userCredits)) {
      throw new RpcException(`User ${userId} does not exist`);
    }
    if (this.userCredits[userId] - amount < 0) {
      throw new RpcException(`User ${userId} does not have enough credit`)
    }
    this.userCredits[userId] -= amount;
    return { balance: this.userCredits[userId] };
  }

  getBalance(userId: string) {
    if (!(userId in this.userCredits)) {
      throw new RpcException(`User ${userId} does not exist`);
    }
    return { balance: this.userCredits[userId] };
  }
}
