import { IVenuesService } from './venues.service.i';
import { Venue } from '../types/venue';
import { VenueLocation } from '../types/venue-location';
import { Id } from '../../../../common/id';

export class MockVenuesService implements IVenuesService {
  venues: { [id in Id]: Venue };
  constructor() {
    this.venues = {
      ['0']: new Venue(
        'The Independent',
        new VenueLocation('San Francisco', 'CA', '94117', '628 Divisadero St'),
      ),
    };
  }

  async findOne(id: Id): Promise<Venue> {
    return this.venues[id].withId(id);
  }

  async findAll(): Promise<Venue[]> {
    return Object.values(this.venues);
  }
}
