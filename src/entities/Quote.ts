import { Tag } from './Tag';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable
} from 'typeorm';
import { Author } from './Author';
import { Category } from './Category';

@Entity({ name: 'quotes' })
export class Quote {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  content: string;

  @Column()
  cover_img: string;

  @Column({ default: 0 })
  views: number;

  @ManyToOne(() => Author, (author) => author.quotes)
  @JoinColumn({
    name: 'author_id'
  })
  author: Author;

  @ManyToOne(() => Category, (category) => category.quotes)
  @JoinColumn({
    name: 'category_id'
  })
  category: Category;

  @ManyToMany(() => Tag)
  @JoinTable({
    name: 'quote_tag',
    joinColumn: {
      name: 'quote_id',
      referencedColumnName: 'id'
    },
    inverseJoinColumn: {
      name: 'tag_id',
      referencedColumnName: 'id'
    }
  })
  tags: Tag[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  deleted: boolean;
}
