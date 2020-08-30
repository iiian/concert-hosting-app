import { Injectable } from '@nestjs/common';
import { Venue } from '../types/venue';
import { IVenuesService } from './venues.service.i';
import { VenueLocation } from '../types/venue-location';

@Injectable()
export class VenuesService implements IVenuesService {
  venues: { [id: string]: Venue };
  constructor() {
    this.venues = {
      ['abcdef01234']: new Venue(
        'The Independent',
        new VenueLocation('San Francisco', 'CA', '94117', '628 Divisadero St'),
      ),
    };
  }

  async findOne(id: string): Promise<Venue> {
    return this.venues[id].withId(id);
  }

  async findAll(): Promise<Partial<Venue>[]> {
    return Object.entries(this.venues).map(entry => ({
      id: entry[0],
      name: entry[1].name,
    }));
  }
}
