import { Injectable } from '@nestjs/common';
import { BaseProxyService } from './base-proxy.service';

@Injectable()
export class PaymentsService extends BaseProxyService('Payments') {}
