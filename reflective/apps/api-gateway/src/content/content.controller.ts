import { Controller, Post, UseGuards, Param, Get } from '@nestjs/common';
import { JwtAuthGuard } from '@rr/auth';
import { ContentService } from './content.service';

const UID = 'uid';
const CID = 'cid';

@Controller('users')
export class ContentController {
  constructor(private readonly contentService: ContentService) {}
  
  @Post(`:${UID}/content`)
  @UseGuards(JwtAuthGuard)
  authorizeContent(
    @Param(UID) userId: string,
    // needs to be 'contentId' because it's not pulled from the body, not the URI.
    @Param('contentId') contentId: string
  ) {
    return this.contentService.authorizeContent(userId, contentId);
  }

  @Get(`:${UID}/content/${CID}`)
  @UseGuards(JwtAuthGuard)
  getContent(
    @Param(UID) userId: string,
    @Param(CID) contentReferenceId: string
  ) {
    return this.contentService.getContent(userId, contentReferenceId);
  }
}