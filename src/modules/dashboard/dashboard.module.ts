import { RouterModule } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { AuthorDashboardController } from '../api/authors/author-api.controller';
import { TagDashboardController } from '../api/tags/tag-api.controller';
import { AuthorModule } from '../author/author.module';
import { TagsModule } from '../tags/tags.module';
@Module({
  controllers: [AuthorDashboardController, TagDashboardController],
  imports: [AuthorModule, TagsModule]
})
export class DashboardModule {}
