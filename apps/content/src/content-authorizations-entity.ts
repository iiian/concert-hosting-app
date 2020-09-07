import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('content_authorizations')
export class ContentAuthorizationsEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'uuid', nullable: false, name: 'user_id' })
  userId: string;

  @Column({ type: 'uuid', nullable: false, name: 'content_id' })
  contentId: string;

  @Column({ type: 'bool', nullable: false, name: 'is_deleted', default: false })
  isDeleted: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;

  @Column({ nullable: false })
  type: string;
}
