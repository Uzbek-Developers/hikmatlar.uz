import { Controller, Get } from '@nestjs/common';
import { TagsService } from './tags.service';
import { Page } from '../../shared/decorators/page.decorator';

@Controller()
export class TagsController {
  constructor(private readonly tagService: TagsService) {}

  @Get('/')
  @Page('tags')
  async tagsList() {
    const tagsGroupByFirstChar = await this.tagService.GroupByFirstChar();
    return { tagsGroupByFirstChar };
  }
}
