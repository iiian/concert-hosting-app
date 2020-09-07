import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { VenueEntity } from './venue-entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VenuesService {
  constructor(
    @InjectRepository(VenueEntity)
    private venuesRepo: Repository<VenueEntity>
  ) {}

  async save(venue: any) {
    
  }

  findOne(id: string): Promise<VenueEntity> {
    return this.venuesRepo.findOne(id);
  }

  findAll(): Promise<VenueEntity[]> {
    return this.venuesRepo.find({
      select: ['id', 'name', 'state']
    });
  }
}
