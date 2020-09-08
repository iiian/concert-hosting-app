import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('stripe_events')
export class StripeEventEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: false, name: 'user_id' })
  userId: string;

  @Column({ nullable: false, name: 'stripe_entity_id' })
  stripeEntityId: string;

  @Column({ nullable: false, name: 'stripe_event_id'})
  stripeEventId: string;

  @Column({ nullable: false })
  type: string;
}
