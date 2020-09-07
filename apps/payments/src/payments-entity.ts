import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('payments')
export class PaymentsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false, name: 'user_id' })
  userId: string;

  @Column({ nullable: false })
  source: string;

  @CreateDateColumn({ nullable: false, name: 'created_at' })
  createdAt: Date;

  // measured in USD, if possible
  @Column({ nullable: false })
  amount: number;
}
