import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StripeEventEntity } from './stripe-event-entity';
import { Repository } from 'typeorm';

@Injectable()
export class StripeService {
  constructor(
    @InjectRepository(StripeEventEntity)
    private eventRepo: Repository<StripeEventEntity>
  ) {}

  createRecord(stripeEntityId: any, userId: any, stripeEventId: string, type: string) {
    return this.eventRepo.save(
      this.eventRepo.create({ userId, stripeEventId, stripeEntityId, type })
    );
  }

  getStripeEntityRecord(stripeEntityId: string, type?: string): Promise<StripeEventEntity> {
    return this.eventRepo.findOne({
      where: {
        stripeEntityId, 
        ...(type && { type })
      }
    })
  }
}
