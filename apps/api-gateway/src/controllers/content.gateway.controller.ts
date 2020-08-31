import {
  Controller,
  Post,
  UseGuards,
  Param,
  Get,
  Logger,
} from '@nestjs/common';
import { JwtAuthGuard } from '@rr/auth';
import { ContentService } from '@rr/microservices';
import { USERS_ROUTE } from '../../route.constants';

const UID = 'uid';
const CID = 'cid';

@Controller(USERS_ROUTE)
export class ContentController {
  private logger = new Logger('ContentController');
  constructor(private readonly contentService: ContentService) {}

  @Post(`:${UID}/content`)
  @UseGuards(JwtAuthGuard)
  authorizeContent(
    @Param(UID) userId: string,
    // needs to be 'contentId' because it's not pulled from the body, not the URI.
    @Param('contentId') contentId: string,
  ) {
    return this.contentService.authorizeContent(userId, contentId);
  }

  @Get(`:${UID}/content/`)
  @UseGuards(JwtAuthGuard)
  getAllForUser(
    @Param(UID) userId: string,
    @Param(CID) contentReferenceId: string,
  ) {
    return this.contentService.getAllForUser(userId);
  }
  
  @Get(`:${UID}/content/:${CID}`)
  @UseGuards(JwtAuthGuard)
  getContent(
    @Param(UID) userId: string,
    @Param(CID) contentReferenceId: string,
  ) {
    return this.contentService.getContent(userId, contentReferenceId);
  }
}
