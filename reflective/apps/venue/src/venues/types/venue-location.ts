export class VenueLocation {
  constructor(
    public city: string,
    public state: string,
    public zip: string,
    public address1: string,
    public address2?: string,
  ) {}
}
