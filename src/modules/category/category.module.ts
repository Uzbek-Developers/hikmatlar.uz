import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryController } from './category.controller';
import { CategoryRepository } from './category.repository';
import { CategoryService } from './category.service';

@Module({
  controllers: [CategoryController],
  imports: [TypeOrmModule.forFeature([CategoryRepository])],
  providers: [CategoryService],
  exports: [CategoryService]
})
export class CategoryModule {}
