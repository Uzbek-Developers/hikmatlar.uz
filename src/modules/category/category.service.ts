import { Injectable } from '@nestjs/common';
import { Category } from '../../entities/Category';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDTO } from './dto/CreateCategory';

@Injectable()
export class CategoryService {
  constructor(private readonly categoryRepository: CategoryRepository) {}

  create(category: CreateCategoryDTO): Promise<Category> {
    const newCategory = this.categoryRepository.create(category);
    return this.categoryRepository.save(newCategory);
  }

  findByName(name: string): Promise<Category> {
    return this.categoryRepository.findOne({ name });
  }
}
