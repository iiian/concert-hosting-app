import { Injectable } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class PaymentsService {
  moneyStuff = {
    ['1']: {
      subscription_status: 'paused',
      payments: []
    }
  };

  createPayment(userId: string, amount: number): any {
    if (!(userId in this.moneyStuff)) {
      throw new RpcException(`${userId} unknown by the PaymentsService!`);
    }
    this.moneyStuff[userId].payments.push({
      amount,
      created_at: Date.now()
    });

    return {
      // @TODO: imagine some form of credit value translation
      creditValue: Math.floor(amount / 10)
    };
  }

  pauseSubscription(userId: string) {
    if (!(userId in this.moneyStuff)) {
      throw new RpcException(`${userId} unknown by the PaymentsService!`);
    }
    this.moneyStuff[userId].subscription_status = 'paused';
  }

  activateSubscription(userId: string) {
    if (!(userId in this.moneyStuff)) {
      throw new RpcException(`${userId} unknown by the PaymentsService!`);
    }
    this.moneyStuff[userId].subscription_status = 'active';
  }

  getSubscriptionStatus(userId: string) {
    if (!(userId in this.moneyStuff)) {
      throw new RpcException(`${userId} unknown by the PaymentsService!`);
    }
    return this.moneyStuff[userId].subscription_status;
  }
  
}
