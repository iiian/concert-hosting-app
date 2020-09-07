import { Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';
import { InjectRepository } from '@nestjs/typeorm';
import { ContentEntity } from './content-entity';
import { Repository } from 'typeorm';
import { ContentAuthorizationsEntity } from './content-authorizations-entity';
import { UserContentAuthorizationsEntity } from './user-content-entity';

@Injectable()
export class ContentService {
  private logger = new Logger('content.content.service');

  constructor(
    @InjectRepository(ContentEntity)
    private contentRepository: Repository<ContentEntity>,
    @InjectRepository(ContentAuthorizationsEntity)
    private contentAuthorizationsRepository: Repository<
      ContentAuthorizationsEntity
    >,
    @InjectRepository(UserContentAuthorizationsEntity)
    private userContentAuthorizations: Repository<
      UserContentAuthorizationsEntity
    >,
  ) {}

  createContent(venueId: string, name: string, uri: string) {
    return this.contentRepository.save(
      this.contentRepository.create({
        venueId,
        name,
        uri,
      }),
    );
  }

  getContent(userId: string, contentId: string) {
    return this.userContentAuthorizations.find({
      where: { userId, contentId },
    });
  }

  findAllForVenueId(venueId: string): any {
    return this.contentRepository.find({ where: { venueId } });
  }

  async isContentAuthorizedForUser(userId: string, contentId: string) {
    return Boolean(
      await this.userContentAuthorizations.findOne({
        userId,
        contentId,
      }),
    );
  }

  getAllForUser(userId: any) {
    return this.userContentAuthorizations.find({
      where: { userId },
    });
  }

  authorizeUserForContent(userId: string, contentId: string) {
    return this.contentAuthorizationsRepository.save(
      this.contentAuthorizationsRepository.create({
        userId,
        contentId,
        type: 'owned',
      }),
    );
  }
}
