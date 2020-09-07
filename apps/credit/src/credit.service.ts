import { Injectable } from '@nestjs/common';
import { MessagePattern, RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { CreditEntity } from './credit-entity';
import { Repository } from 'typeorm';

@Injectable()
export class CreditService {
  constructor(
    @InjectRepository(CreditEntity)
    private creditRepository: Repository<CreditEntity>
  ) {}

  async transact(userId: string, creditAmount: number) {
    const creditReport = await this.creditRepository.findOne(userId);
    if (!creditReport) {
      throw new RpcException(`User ${userId} does not exist`);
    }
    if (creditReport.credits - creditAmount < 0) {
      throw new RpcException(`User ${userId} does not have enough credit`)
    }
    creditReport.credits -= creditAmount;
    this.creditRepository.save(creditReport);
    return { credits: creditReport.credits };
  }

  async getBalance(userId: string) {
    const creditReport = await this.creditRepository.findOne(userId);
    if (!creditReport) {
      throw new RpcException(`User ${userId} does not exist`);
    }
    return { credits: creditReport.credits };
  }
  
  create(userId: string, amount: number) {
    const creditRecord = this.creditRepository.create();
    creditRecord.userId = userId;
    creditRecord.credits = amount;
    return this.creditRepository.save(creditRecord);
  }
}
