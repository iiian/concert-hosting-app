import { Controller, Get, Param } from '@nestjs/common';
import { ContentService } from './content.service';

@Controller('content')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get(':id')
  findAllForVenueId(@Param('id') venueId: string): any[] {
    return this.contentService.findAllForVenueId(venueId);
  }
}
