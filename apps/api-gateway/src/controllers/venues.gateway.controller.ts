import { Controller, Get, Body, Param } from '@nestjs/common';
import { VENUES_ROUTE } from '../../route.constants';
import { VenuesService, ContentService } from '@rr/microservices';

const VID = 'vid';

@Controller(VENUES_ROUTE)
export class VenuesController {
  constructor(
    private venuesService: VenuesService,
    private contentService: ContentService
  ) {}
  
  @Get(`:${VID}`)
  async getVenue(@Param(VID) venueId) {
    this.contentService.getContent
  }
}
