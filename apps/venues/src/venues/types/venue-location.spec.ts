import { VenueLocation } from './venue-location';

describe('VenueLocation', () => {
  it('should be defined', () => {
    expect(new VenueLocation('foo', 'bar', 'baz', 'buzz', 'bash')).toBeDefined();
  });
});
