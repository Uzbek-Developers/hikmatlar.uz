import { Category } from '../../entities/Category';
import { EntityRepository, Repository } from 'typeorm';
import { Logger } from '@nestjs/common';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
  private readonly logger = new Logger(Category.name);
}
