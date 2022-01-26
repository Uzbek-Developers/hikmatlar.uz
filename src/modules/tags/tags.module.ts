import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TagsService } from './tags.service';
import { TagsController } from './tags.controller';
import { TagRepository } from './tags.repository';

@Module({
  controllers: [TagsController],
  imports: [TypeOrmModule.forFeature([TagRepository])],
  providers: [TagsService],
  exports: [TagsService]
})
export class TagsModule {}
