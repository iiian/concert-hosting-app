import { Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { Repository } from 'typeorm';
import { PaymentsEntity } from './payments-entity';
import { InjectRepository } from '@nestjs/typeorm';
import { SubscriptionEntity } from './subscription-entity';

@Injectable()
export class PaymentsService {
  logger = new Logger('PaymentsService');
  constructor(
    @InjectRepository(PaymentsEntity)
    private paymentsRepo: Repository<PaymentsEntity>,
    @InjectRepository(SubscriptionEntity)
    private subscriptionsRepo: Repository<SubscriptionEntity>
  ) {}

  async createPayment(userId: string, amount: number): Promise<any> {
    const payment = this.paymentsRepo.create({ 
      userId, 
      amount,
      source: 'stripe'
    });
    this.paymentsRepo.save(payment);

    return 'ok';
  }

  async pauseSubscription(userId: string) {
    await this.subscriptionsRepo.save(
      this.subscriptionsRepo.create({ userId, subscribed: false })
    );
    return 'paused';
  }

  async activateSubscription(userId: string) {
    await this.subscriptionsRepo.save(
      this.subscriptionsRepo.create({ userId, subscribed: true })
    );
    return 'activated';
  }

  getSubscriptionStatus(userId: string) {
    return this.subscriptionsRepo.findOne({
      select: ['subscribed'],
      where: { userId },
      order: { createdAt: 'DESC' }
    });
  }
}
