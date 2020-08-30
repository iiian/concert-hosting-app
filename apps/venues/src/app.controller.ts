import { Controller, Get, Param } from '@nestjs/common';
import { VenuesService } from './venues/service/venues.service';
import { Venue } from './venues/types/venue';

@Controller('venues')
export class AppController {
  constructor(private readonly venuesService: VenuesService) {}

  @Get()
  getVenues(): Promise<any> {
    return this.venuesService.findAll();
  }

  @Get(':id')
  getVenueById(@Param('id') id: string): Promise<Venue> {
    return this.venuesService.findOne(id);
  }
}
