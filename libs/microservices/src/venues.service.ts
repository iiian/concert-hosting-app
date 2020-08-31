import { Injectable } from '@nestjs/common';
import { BaseProxyService } from './base-proxy.service';

@Injectable()
export class VenuesService extends BaseProxyService('Venues') {
  getVenues() {
    return this.proxy.send('get-all-venues', []).toPromise();
  }
  getVenue(venueId: any) {
    return this.proxy.send('get-venue-for-id', venueId).toPromise();
  }
}
