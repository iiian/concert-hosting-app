import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity('content')
export class ContentEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'venue_id', nullable: false, type: 'uuid' })
  venueId: string;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  uri: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
