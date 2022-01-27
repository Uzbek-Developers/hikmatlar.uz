import { RouterModule } from '@nestjs/core';
import { Module } from '@nestjs/common';
import { AuthorDashboardController } from '../api/authors/author-api.controller';
import { AuthorModule } from '../author/author.module';

@Module({
  controllers: [AuthorDashboardController],
  imports: [AuthorModule]
})
export class DashboardModule {}
