import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('venues')
export class VenueEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  state: string;

  @Column({ nullable: false })
  zip: string;

  @Column({ nullable: false })
  address1: string;

  @Column({ nullable: true })
  address2: string;

  @Column({ nullable: false })
  name: string
}
