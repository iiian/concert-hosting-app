import { Injectable } from '@nestjs/common';
// import { Id } from '../../common/id';

@Injectable()
export class ContentService {
  content: { [id: string]: any[] };
  constructor () {
    this.content = {
      ['abcdef1234']: [{
        id: 'xyz987',
        cost: 1,
        name: 'Big Boi, Live @ The Independent 09/16/20'
      }]
    };
  }

  findAllForVenueId(venueId: string): any[] {
    return this.content[venueId];
  }
}
