import { Controller, Get } from '@nestjs/common';
import { StripeService } from './stripe.service';

@Controller()
export class StripeController {
  constructor(private readonly appService: StripeService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
