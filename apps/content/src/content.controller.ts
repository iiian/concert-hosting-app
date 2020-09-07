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

  @MessagePattern('get-all-for-user')
  getAllForUser(userId: string) {
    return this.contentService.getAllForUser(userId);
  }

  @MessagePattern('get-all-for-venue')
  getAllForVenue(venueId: string) {
    return this.contentService.findAllForVenueId(venueId);
  }

  @MessagePattern('get-content')
  getContent([userId, contentReferenceId]) {
    return this.contentService.getContent(userId, contentReferenceId);
  }

  @MessagePattern('authorize-content')
  authorizeContent([userId, contentId]) {
    return this.contentService.authorizeUserForContent(userId, contentId);
  }

  @MessagePattern('authorization-check')
  isContentAuthorizedForUser([userId, contentId]) {
    return this.contentService.isContentAuthorizedForUser(userId, contentId);
  }

  @MessagePattern('create-content')
  createContent([venueId, name, uri]: [string, string, string]) {
    return this.contentService.createContent(venueId, name, uri);
  }
}
