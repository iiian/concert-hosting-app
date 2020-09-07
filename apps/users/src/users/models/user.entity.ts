import { PrimaryGeneratedColumn, Entity, Column } from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({
    name: 'email',
    nullable: true,
  })
  email: string;

  @Column({
    name: 'password',
    nullable: true,
  })
  password: string;
}
