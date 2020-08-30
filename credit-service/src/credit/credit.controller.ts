import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class CreditController {
  constructor() {}

  @MessagePattern({ role: 'system', cmd: 'addCreditsForUser' })
  async addCreditsForUser(userId: string, amount: number): Promise<number> {
    return 10;
  }

  @MessagePattern({ role: 'system', cmd: 'getCreditsForUser' })
  async getCreditsForUser(userId: string, amount: number): Promise<number> {
    return 100;
  }
}
