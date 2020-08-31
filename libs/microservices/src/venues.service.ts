import { Injectable } from '@nestjs/common';
import { BaseProxyService } from './base-proxy.service';

@Injectable()
export class VenuesService extends BaseProxyService('VenuesService') {}
