import { Injectable, Logger } from '@nestjs/common';
import { RpcException } from '@nestjs/microservices';

@Injectable()
export class ContentService {
  private logger = new Logger('content.content.service');
  contentAuths: any;
  contentByVenue: any;
  content: any;
  authorizations: any;
  
  getContent(userId: string, contentReferenceId: string) {
    this.logger.log(`getContent(userId=${userId}, contentReferenceId=${contentReferenceId})`);
    if (!this.contentAuths[String(userId)]?.[String(contentReferenceId)]) {
      /*@TODO:Error Handling*/
      throw new RpcException('UserId|ReferenceId combo failed.');
    }
    return {
      uri: this.contentAuths[userId][contentReferenceId]
    };
  }

  findAllForVenueId(venueId: string): any[] {
    return this.content[venueId];
  }

  findById(id: string) {
    return Object.values<any>(this.content)
      .flat()
      .find(content => id === content.id);
  }

  isContentAuthorizedForUser(userId: string, contentId: string) {
    const userAuthorizations: string[] = this.authorizations[userId];
    return userAuthorizations.includes(contentId);
  }

  getAllForUser(userId: any) {
    return Object.keys(this.contentAuths[userId])
      .map(key => this.findById(key));
  }

  constructor() {
    this.contentAuths = {
      ['1']: {
        ['1234'] : 'https://rr.com/content/9825-3983598-239847', 
        ['2468']: 'https://rr.com/content/2378-98258739-2483784'
      }
    }

    this.contentByVenue = {
      ['1']: [
        {
          id: '1234',
          name: 'Wylde Stallions (w/ special guest star Rufus)',
          thumbnail: 'https://homepages.cae.wisc.edu/~ece533/images/pool.png'
        }, 
      ],
      ['2']: [
        {
          id: '2468',
          name: 'The Fall of Troy',
          thumbnail: 'https://homepages.cae.wisc.edu/~ece533/images/pool.png'
        }
      ]
    }
  
    this.content = {
      ['abcdef1234']: [
        {
          id: '1234',
          name: 'Wylde Stallions (w/ special guest star Rufus)',
          thumbnail: 'https://homepages.cae.wisc.edu/~ece533/images/pool.png'
        },
        {
          id: '2468',
          name: 'The Fall of Troy',
          thumbnail: 'https://homepages.cae.wisc.edu/~ece533/images/pool.png'
        },
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

    this.authorizations = {
      ['1']: ['xyz987', 'nth345'],
    };
  }
}
