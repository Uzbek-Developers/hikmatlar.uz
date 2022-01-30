import {
  Post,
  Controller,
  Body,
  Put,
  Param,
  NotFoundException
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags
} from '@nestjs/swagger';

import { TagsService } from '../../tags/tags.service';
import { CreateTagDto } from '../../tags/dto/CreateTag';
import { TagDto } from '../../tags/dto/TagDto';
import { ValidationErrorExeption } from '../../../shared/exception/ValidationErrorExeption';
import { Tag } from '../../../entities/Tag';
import { UpdateResult } from 'typeorm';
import { UpdateTagDto } from '../../tags/dto/UpdateTag';

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

  @Put(':id')
  @ApiOkResponse({ description: 'Ok' })
  @ApiBadRequestResponse({
    description: 'Bad Request',
    schema: {
      type: 'String',
      example: {
        statusCode: 400,
        message: ['name must be a string'],
        error: 'Bad Request'
      }
    }
  })
  @ApiNotFoundResponse({
    description: 'Not Found',
    schema: {
      type: 'String',
      example: {
        statusCode: 404,
        message: 'Tag not found!',
        error: 'Not Found'
      }
    }
  })
  async updateTag(
    @Param('id') id: string,
    @Body() tag: UpdateTagDto
  ): Promise<UpdateResult> {
    const isExistsTag = await this.tagService.getById(id);

    if (isExistsTag === undefined) {
      throw new NotFoundException('Tag not found!');
    }

    return this.tagService.update(id, tag);
  }
}
