import {
  Post,
  Controller,
  Body,
  Delete,
  Param,
  NotFoundException
} from '@nestjs/common';
import { AuthorService } from '../../author/author.service';
import { CreateAuthorDto } from '../../author/dto/CreateAuthor';
import {
  ApiBadRequestResponse,
  ApiCreatedResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags
} from '@nestjs/swagger';
import { Author } from '../../../entities/Author';
import { AuthorDto } from '../../author/dto/AuthorDto';
import { ValidationErrorExeption } from '../../../shared/exception/ValidationErrorExeption';
import { DeleteResult } from 'typeorm';

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

  @Delete(':id')
  @ApiOkResponse({ description: 'OK' })
  @ApiNotFoundResponse({
    description: 'Not Found',
    schema: {
      type: 'String',
      example: {
        statusCode: 404,
        message: 'Author not found!',
        error: 'Not Found'
      }
    }
  })
  async deleteAuthor(@Param('id') id: string): Promise<DeleteResult> {
    const author = await this.authorService.getAuthor(id);

    if (author === undefined) {
      throw new NotFoundException('Author not found!');
    }

    return this.authorService.delete(id);
  }
}
