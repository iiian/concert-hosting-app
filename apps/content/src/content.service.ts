import { Injectable } from '@nestjs/common';
// import { Id } from '../../common/id';

@Injectable()
export class ContentService {
  content = {
    ['abcdef1234']: [
      {
        id: 'xyz987',
        cost: 1,
        name: 'Big Boi, Live @ The Independent 09/16/20',
      },
      {
        id: 'nth345',
        cost: 1,
        name: 'Paul "Roald Dahl" Wall reads James and the Giant Peach',
      },
    ],
  };

  authorizations = {
    ['0']: ['xyz987', 'nth345'],
  };

  findAllForVenueId(venueId: string): any[] {
    return this.content[venueId];
  }

  findById(id: string) {
    return Object.values(this.content)
      .flat()
      .find(content => id === content.id);
  }

  isContentAuthorizedForUser(userId: string, contentId: string) {
    const userAuthorizations: string[] = this.authorizations[userId];
    return userAuthorizations.includes(contentId);
  }
}
