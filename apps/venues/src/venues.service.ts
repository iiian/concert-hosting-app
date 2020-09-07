import { Injectable } from '@nestjs/common';

@Injectable()
export class VenuesService {

  async save(venue: any) {
    
  }

  async findOne(id: string): Promise<Venue> {
    return this.venues[id].withId(id);
  }

  async findAll(): Promise<> {
    return Object.entries(this.venues).map(entry => ({
      id: entry[0],
      name: entry[1].name,
    }));
  }
}
