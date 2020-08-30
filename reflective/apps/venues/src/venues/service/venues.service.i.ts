import { Venue } from '../types/venue';

export interface IVenuesService {
  findOne(id: string): Promise<Venue>;
  findAll(): Promise<Partial<Venue>[]>;
}