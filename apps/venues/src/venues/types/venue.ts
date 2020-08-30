import { VenueLocation } from './venue-location';

export class Venue {
  public id: string;
  constructor(
    public readonly name: string,
    public readonly location: VenueLocation,
  ) {}

  withId(id: string): this {
    this.id = id;
    return this;
  }
}
