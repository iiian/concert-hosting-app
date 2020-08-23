import { VenueLocation } from './venue-location';
import { Id } from '../../../../common/id';

export class Venue {
  public id: Id;
  constructor(
    public readonly name: string,
    public readonly location: VenueLocation,
  ) {}

  withId(id: Id): this {
    this.id = id;
    return this;
  }
}
