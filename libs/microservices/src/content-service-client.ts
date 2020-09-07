import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseServiceClient } from './base-service-client';

@Injectable()
export class ContentServiceClient extends BaseServiceClient('Content') {
  getAllForUser(userId: string) {
    try {
      return this.proxy
        .send('get-all-for-user', userId)
        .toPromise();
    } catch(error) {
      return new NotFoundException(error);
    }
  }
  async authorizeContent(userId: string, contentId: string) {
    try {
      return this.proxy
        .send('authorize-content', [userId, contentId])
        .toPromise();
    } catch(error) {
      return new NotFoundException(error);
    }
  }

  async authorizationCheck(userId: string, contentId: string) {
    try {
      return await this.proxy
        .send('authorization-check', [userId, contentId])
        .toPromise();
    } catch(error) {
      return new NotFoundException(error);
    }
  }

  async getContent(userId: string, contentReferenceId: string) {
    try {
      return await this.proxy
        .send('get-content', [userId, contentReferenceId])
        .toPromise();
    } catch(error) {
      return new NotFoundException(error);
    }
  }

  async listContentForVenue(venueId: string) {
    try {
      return await this.proxy
        .send('list-for-venue', venueId)
        .toPromise();
    } catch(error) {
      return new NotFoundException(error);
    }
  }
}
