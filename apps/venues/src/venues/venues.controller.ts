import { Controller, Get, Param } from '@nestjs/common';
import { VenuesService } from './service/venues.service';
import { Venue } from './types/venue';
import { MessagePattern } from '@nestjs/microservices';

@Controller('venues')
export class VenuesController {
  constructor(private readonly venuesService: VenuesService) {}

  @MessagePattern('get-all-venues')
  getVenues(): Promise<any> {
    return this.venuesService.findAll();
  }

  @MessagePattern('get-venue-for-id')
  getVenueById(venueId: string): Promise<Venue> {
    return this.venuesService.findOne(venueId);
  }
}
