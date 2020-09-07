import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity('credits')
export class CreditEntity {
  @PrimaryColumn('uuid', { name: 'id' })
  userId: string;

  @Column('smallint')
  credits: number;
}
