import { Injectable } from '@nestjs/common';
import { TagsGroupByFirstChar } from './dto/TagsGroupByFirstChar';
import { TagRepository } from './tags.repository';

@Injectable()
export class TagsService {
  constructor(private readonly tagsRepository: TagRepository) {}

  GroupByFirstChar(): Promise<TagsGroupByFirstChar[]> {
    return this.tagsRepository.getTagsGroupByFirstChar(10);
  }
}
