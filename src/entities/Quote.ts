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

@Entity({ name: 'quotes' })
export class Quote {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text' })
  content: string;

  @Column()
  cover_img: string;

  @Column()
  views: number;

  @ManyToOne(() => Author, (author) => author.quotes)
  @JoinColumn({ name: 'author_id' })
  author: Author;

  @ManyToMany(() => Tag)
  @JoinTable({ name: 'quote_tag' })
  tags: Tag[];

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  @Column()
  deleted: boolean;
}
