import { Controller, Get, Post, Body, Logger } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { UsersServiceClient } from '@rr/auth/users/users-service-client';
import { PaymentsServiceClient } from '@rr/microservices';

const loggerName = 'StripeWebhooks';
@Controller('stripe/webhooks')
export class StripeController {
  logger = new Logger(loggerName);
  constructor(
    private readonly stripeService: StripeService,
    private readonly usersServiceClient: UsersServiceClient,
    private readonly paymentsServiceClient: PaymentsServiceClient
  ) {}

  @Post('customer/created')
  async postCustomerCreated(@Body('data') { object: customer }, @Body('id') eventId: string) {
    this.logger.setContext(`${loggerName}: customer/created`)
    this.logger.log(customer);
    const userId: string = customer.metadata['id'] || (await this.usersServiceClient.findOne(customer.email)).id;
    const customerId: string = customer.id;
    this.stripeService.createRecord(customerId, userId, eventId, 'customer.created');
    this.usersServiceClient.attachExternalId(userId, customerId);
    return 'ok';
  }

  // @todo: necessary?
  @Post('customer/subscription/created')
  async postCustomerSubscriptionCreated(@Body('data') { object: subscription }, @Body('id') eventId: string): Promise<string> {
    this.logger.setContext(`${loggerName}: customer/subscription/created`);
    this.logger.log(subscription);
    const userId = subscription.metadata['id'] || (await this.stripeService.getStripeEntityRecord(subscription.customer)).userId;
    const subscriptionId = subscription.id;
    await this.stripeService.createRecord(subscriptionId, userId, eventId, 'subscription.created');
    await this.paymentsServiceClient.attachSubscriptionExternalId(userId, subscriptionId);
    await this.paymentsServiceClient.activateSubscription(userId);
    return 'ok';
  }

  @Post('customer/subscription/updated')
  postCustomerSubscriptionUpdated(@Body() body): string {
    this.logger.setContext(`${loggerName}: customer/subscription/updated`)
    this.logger.log(body.id);
    return;
  }

  @Post('subscriptions/requires-payment-method')
  postSubscriptionsRequiresPaymentMethod(@Body() body): string {
    this.logger.log(body.id);
    return;
  }

  @Post('invoice/payment-action-required')
  postInvoicePaymentRequiresAction(@Body() body): string {
    this.logger.setContext(`${loggerName}: invoice/payment-action-required`);
    this.logger.log(body.id);
    return;
  }

  @Post('invoice/payment-failed')
  postInvoicePaymentFailed(@Body() body): string {
    this.logger.setContext(`${loggerName}: invoice/payment-failed`);
    this.logger.log(body.id);
    return;
  }

  // @TODO: update credits in the database for the user...
  @Post('invoice/paid')
  async postPaymentIntentSucceeded(@Body('data') { object: invoice }, @Body('id') eventId) {
    this.logger.setContext(`${loggerName}: invoice/paid`);

    const invoiceId = invoice.id;
    const userId = invoice.metadata['id'] || (await this.stripeService.getStripeEntityRecord(invoice.customer)).userId;
    const amount = Number(invoice['amount']) / 100;
    this.logger.log([invoiceId, userId, amount, invoice]);
    await this.stripeService.createRecord(invoiceId, userId, eventId, 'payment_intent.succeeded');
    await this.paymentsServiceClient.createPayment(userId, amount);
    return 'ok';
  }
}