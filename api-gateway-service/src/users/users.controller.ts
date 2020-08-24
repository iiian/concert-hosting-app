import { Controller, Post, UseGuards, Param } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ContentService } from 'src/content/content.service';

const UID = 'uid';
const CID = 'cid';

@Controller('users')
export class UsersController {
  constructor(private readonly contentService: ContentService) {}
  
  @Post(`:${UID}/content/:${CID}/authorize`)
  @UseGuards(JwtAuthGuard)
  authorizeContent(@Param(UID) userId: string, @Param(CID) contentId) {
    return this.contentService.authorizeContent(userId, contentId);
  }
}
