import { Controller, Get, Body } from '@nestjs/common';
import { VENUES_ROUTE } from 'apps/api-gateway/route.constants';

@Controller(VENUES_ROUTE)
export class VenuesController {
  @Get(':id')
  getVenue(@Body() body) {}
}
