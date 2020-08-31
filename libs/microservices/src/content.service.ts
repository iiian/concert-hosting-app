import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseProxyService } from './base-proxy.service';

@Injectable()
export class ContentService extends BaseProxyService('Content') {
  async authorizeContent(userId: string, contentId: string) {
    try {
      return this.proxy
        .send('authorize-content', { userId, contentId })
        .toPromise();
    } catch(error) {
      return new NotFoundException(error);
    }
  }

  async authorizationCheck(userId: string, contentId: string) {
    try {
      return await this.proxy
        .send('authorization-check', { userId, contentId })
        .toPromise();
    } catch(error) {
      return new NotFoundException(error);
    }
  }

  async getContent(userId: string, contentReferenceId: string) {
    try {
      return await this.proxy
        .send('get-content', { userId, contentReferenceId })
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
