import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Quote } from './Quote';

@Entity({ name: 'categories' })
export class Category {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => Quote, (quote) => quote.category)
  quotes: Quote[];
}
