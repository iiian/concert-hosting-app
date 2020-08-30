import { Controller, Get, Body } from '@nestjs/common';

@Controller('venues')
export class VenuesController {
  @Get(':id')
  getVenue(@Body() body) {}
}
