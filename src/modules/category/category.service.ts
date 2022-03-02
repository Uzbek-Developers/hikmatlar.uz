import { Injectable } from '@nestjs/common';
import { DeleteResult, UpdateResult } from 'typeorm';
import { Category } from '../../entities/Category';
import { CategoryRepository } from './category.repository';
import { CreateCategoryDTO } from './dto/CreateCategory';
import { UpdateCategoryDTO } from './dto/UpdateCategory';

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

  update(id: string, category: UpdateCategoryDTO): Promise<UpdateResult> {
    return this.categoryRepository.update(id, category);
  }

  delete(id: string): Promise<DeleteResult> {
    return this.categoryRepository.delete(id);
  }

  findOne(id: string): Promise<Category> {
    return this.categoryRepository.findOne(id);
  }
}
