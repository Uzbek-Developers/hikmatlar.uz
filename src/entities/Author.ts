import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Quote } from './Quote';
@Entity({ name: 'authors' })
export class Author {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  full_name: string;

  @OneToMany(() => Quote, (quote) => quote.author)
  quotes: Quote[];

  @Column({ type: 'text' })
  description: string;
}
