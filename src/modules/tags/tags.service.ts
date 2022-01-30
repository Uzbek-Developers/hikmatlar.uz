import { Injectable } from '@nestjs/common';
import { TagsGroupByFirstChar } from './dto/TagsGroupByFirstChar';
import { TagRepository } from './tags.repository';
import { CreateTagDto } from './dto/CreateTag';
import { Tag } from '../../entities/Tag';
import { UpdateTagDto } from './dto/UpdateTag';
import { UpdateResult } from 'typeorm';
@Injectable()
export class TagsService {
  constructor(private readonly tagsRepository: TagRepository) {}

  GroupByFirstChar(): Promise<TagsGroupByFirstChar[]> {
    return this.tagsRepository.getTagsGroupByFirstChar(10);
  }

  create(tag: CreateTagDto): Promise<Tag> {
    const authorModel = this.tagsRepository.create(tag);
    return this.tagsRepository.save(authorModel);
  }

  getTag(id: string): Promise<Tag> {
    return this.tagsRepository.findOne(id);
  }

  update(id: string, tag: UpdateTagDto): Promise<UpdateResult> {
    return this.tagsRepository.update(id, tag);
  }
}
