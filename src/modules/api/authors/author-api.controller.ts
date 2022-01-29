import { Post, Controller, Body, Put, Param } from '@nestjs/common';
import { AuthorService } from '../../author/author.service';
import { CreateAuthorDto } from '../../author/dto/CreateAuthor';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiTags
} from '@nestjs/swagger';
import { Author } from '../../../entities/Author';
import { AuthorDto } from '../../author/dto/AuthorDto';
import { ValidationErrorExeption } from '../../../shared/exception/ValidationErrorExeption';
import { UpdateResult } from 'typeorm';
import { UpdateAuthorDto } from '../../author/dto/UpdateAuthor';

@Controller('/authors')
@ApiTags('authors')
export class AuthorDashboardController {
  constructor(private readonly authorService: AuthorService) {}

  @Post('/')
  @ApiCreatedResponse({ type: AuthorDto })
  @ApiBadRequestResponse({ type: ValidationErrorExeption })
  async createAuthor(@Body() author: CreateAuthorDto): Promise<Author> {
    return this.authorService.create(author);
  }

  @Put(':id')
  async updateAuthor(
    @Param() id,
    @Body() author: UpdateAuthorDto
  ): Promise<UpdateResult> {
    return this.authorService.update(id, author);
  }
}
