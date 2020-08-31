import { Controller, Param } from '@nestjs/common';
import { ContentService } from './content.service';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @MessagePattern('list-for-venue')
  findAllForVenueId(@Param('id') venueId: string): any[] {
    return this.contentService.findAllForVenueId(venueId);
  }

  @MessagePattern('get-content')
  getContent({
    userId,
    contentReferenceId,
  }: {
    userId: string;
    contentReferenceId: string;
  }) {
    return this.contentService.getContent(userId, contentReferenceId);
  }

  @MessagePattern('authorize-content')
  authorizeContent({
    userId,
    contentId,
  }: {
    userId: string;
    contentId: string;
  }) {
    const content = this.contentService.findById(contentId);
    return `"${content.name}" authorized for user-id ${userId}`;
  }

  @MessagePattern('authorization-check')
  isContentAuthorizedForUser(userId: string, contentId: string) {
    return this.contentService.isContentAuthorizedForUser(userId, contentId);
  }
}
