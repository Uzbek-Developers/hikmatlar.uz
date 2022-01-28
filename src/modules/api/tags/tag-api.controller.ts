import { Post, Controller, Body } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags
} from '@nestjs/swagger';

import { TagsService } from '../../tags/tags.service';
import { CreateTagDto } from '../../tags/dto/CreateTag';
import { TagDto } from '../../tags/dto/TagDto';
import { ValidationErrorExeption } from '../../../shared/exception/ValidationErrorExeption';
import { Tag } from '../../../entities/Tag';

@Controller('/tags')
@ApiTags('tags')
export class TagDashboardController {
  constructor(private readonly tagService: TagsService) {}

  @Post('/')
  @ApiCreatedResponse({ type: TagDto })
  @ApiBadRequestResponse({ type: ValidationErrorExeption })
  async createTag(@Body() tag: CreateTagDto): Promise<Tag> {
    return this.tagService.create(tag);
  }
}
