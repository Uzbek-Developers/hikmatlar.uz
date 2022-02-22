import { Module } from '@nestjs/common';
import { AuthorDashboardController } from '../api/authors/author-api.controller';
import { CategoryDashboardController } from '../api/category/category-api.controller';
import { TagDashboardController } from '../api/tags/tag-api.controller';
import { AuthorModule } from '../author/author.module';
import { CategoryModule } from '../category/category.module';
import { TagsModule } from '../tags/tags.module';
@Module({
  controllers: [
    AuthorDashboardController,
    TagDashboardController,
    CategoryDashboardController
  ],
  imports: [AuthorModule, TagsModule, CategoryModule]
})
export class DashboardModule {}
