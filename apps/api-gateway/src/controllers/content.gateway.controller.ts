import {
  Controller,
  Post,
  UseGuards,
  Param,
  Get,
  Logger,
  Body,
} from '@nestjs/common';
import { JwtAuthGuard } from '@rr/auth';
import { ContentServiceClient } from '@rr/microservices';
import { USERS_ROUTE } from '../../route.constants';

const UID = 'uid';
const CID = 'cid';

@Controller(USERS_ROUTE)
export class ContentController {
  private logger = new Logger('ContentController');
  constructor(private readonly contentService: ContentServiceClient) {}

  @Post(`:${UID}/content/`)
  @UseGuards(JwtAuthGuard)
  authorizeContent(
    @Param(UID) userId: string,
    @Body('content_id') contentId: string,
  ) {
    this.logger.log(userId);
    this.logger.log(contentId);
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
    @Param(CID) contentId: string,
  ) {
    return this.contentService.getContent(userId, contentId);
  }
}
