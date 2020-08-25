import { Controller, Post, Request, Logger, Body } from '@nestjs/common';

@Controller('stripe-webhook')
export class StripeWebhookController {
  private readonly logger: Logger = new Logger('StripeWebhookService');
  @Post() 
  handleStripeResponse(@Body() body) {
    this.logger.log(body);
  }
}
