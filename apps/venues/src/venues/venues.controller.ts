import { Controller, Get, Param } from '@nestjs/common';
import { VenuesService } from './service/venues.service';
import { Venue } from './types/venue';

@Controller('venues')
export class VenuesController {
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
