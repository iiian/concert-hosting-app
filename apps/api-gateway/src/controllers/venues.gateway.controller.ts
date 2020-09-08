import {
  Controller,
  Get,
  Param,
  Body,
  Post,
  Logger,
  Query,
} from '@nestjs/common';
import { VENUES_ROUTE } from '../../route.constants';
import { VenuesServiceClient, ContentServiceClient } from '@rr/microservices';
import {
  ApiBearerAuth,
  ApiTags,
  ApiOperation,
  ApiResponse,
} from '@nestjs/swagger';

const VID = 'vid';
const CID = 'cid';

@ApiBearerAuth()
@ApiTags('venues')
@Controller(VENUES_ROUTE)
export class VenuesController {
  logger = new Logger('vid');
  constructor(
    private venuesServiceClient: VenuesServiceClient,
    private contentServiceClient: ContentServiceClient,
  ) {}

  @Get()
  @ApiOperation({ summary: 'Get Venues' })
  @ApiResponse({ status: 200, description: 'Venues and stuff' })
  async getVenues() {
    return this.venuesServiceClient.getVenues();
  }

  @Get(`:${VID}`)
  async getVenue(@Param(VID) venueId) {
    return this.venuesServiceClient.getVenue(venueId);
  }

  // https:/reflective.com/api/v1/venues/venue-id/content/content-id?is_user_authorized=uid
  @Get(`:${VID}/content/:${CID}`)
  async isAuthorized(
    @Param(`${CID}`) contentId,
    @Query(`is_user_authorized`) userId,
  ) {
    this.logger.log(contentId);
    this.logger.log(userId);
    return this.contentServiceClient.authorizationCheck(userId, contentId);
  }

  // https:/reflective.com/api/v1/venues/venue-id/content/
  @Get(`:${VID}/content/`)
  async getVenueContent(@Param(`${VID}`) venueId) {
    return (await this.contentServiceClient.getAllForVenue(venueId)).map(
      result => {
        delete result.uri;
        return result;
      },
    );
  }

  @Post(`:${VID}/content`)
  // @TODO: @UserGuards(VerifyParameter('venue_id')) ?
  // @TODO: @UseGuards(PermissionLevelGuard('admin'))
  async createContent(@Param(`${VID}`) venueId, @Body() body) {
    this.logger.log(body);
    return this.contentServiceClient.createContent({ venueId, ...body });
  }
}
