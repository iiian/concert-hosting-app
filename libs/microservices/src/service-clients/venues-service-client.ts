import { Injectable } from '@nestjs/common';
import { BaseServiceClient } from './base-service-client';

@Injectable()
export class VenuesServiceClient extends BaseServiceClient('Venues') {
  getVenues() {
    return this.proxy.send('get-all-venues', []).toPromise();
  }
  getVenue(venueId: any) {
    return this.proxy.send('get-venue-for-id', venueId).toPromise();
  }
}
