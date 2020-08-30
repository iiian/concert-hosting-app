import { Controller, Get, Param } from '@nestjs/common';
import { ContentService } from './content.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get(':id')
  findAllForVenueId(@Param('id') venueId: string): any[] {
    return this.contentService.findAllForVenueId(venueId);
  }

  @MessagePattern({ role: 'user', cmd: 'authorize-content'})
  authorizeContent({ userId, contentId }: { userId: string, contentId: string }) {
    const content = this.contentService.findById(contentId);
    return `"${content.name}" authorized for user-id ${userId}`;
  }

  @MessagePattern({ role: 'user', cmd: 'authorization-check' })
  isContentAuthorizedForUser(userId: string, contentId: string) {
    return this.contentService.isContentAuthorizedForUser(userId, contentId);
  }
}
