import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: 'admin_users' })
export class AdminUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;
}
