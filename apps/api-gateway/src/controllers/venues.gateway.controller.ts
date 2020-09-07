import { Controller, Get, Param } from '@nestjs/common';
import { VENUES_ROUTE } from '../../route.constants';
import { VenuesServiceClient, ContentServiceClient } from '@rr/microservices';

const VID = 'vid';

@Controller(VENUES_ROUTE)
export class VenuesController {
  constructor(
    private venuesService: VenuesServiceClient,
    private contentService: ContentServiceClient
  ) {}
  
  @Get()
  async getVenues() {
    return this.venuesService.getVenues();
  }

  @Get(`:${VID}`)
  async getVenue(@Param(VID) venueId) {
    return this.venuesService.getVenue(venueId);
  }
}
