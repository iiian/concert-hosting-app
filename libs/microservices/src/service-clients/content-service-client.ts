import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseServiceClient } from './base-service-client';

@Injectable()
export class ContentServiceClient extends BaseServiceClient('Content') {
  createContent({ venueId, name, uri }: any) {
    return this.proxy.send('create-content', [venueId, name, uri]).toPromise();
  }

  getAllForUser(userId: string) {
    try {
      return this.proxy.send('get-all-for-user', userId).toPromise();
    } catch (error) {
      return new NotFoundException(error);
    }
  }

  getAllForVenue(venueId: any) {
    try {
      return this.proxy.send('get-all-for-venue', venueId).toPromise();
    } catch (error) {
      return new NotFoundException(error);
    }
  }

  async authorizeContent(userId: string, contentId: string) {
    try {
      return this.proxy
        .send('authorize-content', [userId, contentId])
        .toPromise();
    } catch (error) {
      return new NotFoundException(error);
    }
  }

  async authorizationCheck(userId: string, contentId: string) {
    try {
      return await this.proxy
        .send('authorization-check', [userId, contentId])
        .toPromise();
    } catch (error) {
      return new NotFoundException(error);
    }
  }

  async getContent(userId: string, contentReferenceId: string) {
    try {
      return await this.proxy
        .send('get-content', [userId, contentReferenceId])
        .toPromise();
    } catch (error) {
      return new NotFoundException(error);
    }
  }

  async listContentForVenue(venueId: string) {
    try {
      return await this.proxy.send('list-for-venue', venueId).toPromise();
    } catch (error) {
      return new NotFoundException(error);
    }
  }
}
