import { Controller, Get, Param } from '@nestjs/common';
import { VenuesService } from './venues.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller('venues')
export class VenuesController {
  constructor(private readonly venuesService: VenuesService) {}

  @MessagePattern('get-all-venues')
  getVenues() {
    return this.venuesService.findAll();
  }

  @MessagePattern('get-venue-for-id')
  getVenueById(venueId: string) {
    return this.venuesService.findOne(venueId);
  }
}
