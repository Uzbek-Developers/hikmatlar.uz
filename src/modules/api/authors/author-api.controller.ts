import {
  Post,
  Controller,
  Body,
  Delete,
  Put,
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
  @ApiOkResponse({ description: 'OK' })
  @ApiBadRequestResponse({
    description: 'Bad Request',
    schema: {
      type: 'String',
      enum: [
        {
          statusCode: 400,
          message: 'full_name must be a string',
          error: 'Bad Request'
        },
        {
          statusCode: 400,
          message: 'description must be a string',
          error: 'Bad Request'
        }
      ]
    }
  })
  @ApiNotFoundResponse({
    description: 'Not Found',
    schema: {
      type: 'String',
      example: {
        statusCode: 404,
        message: 'Author not found!',
        error: 'Bad Request'
      }
    }
  })
  async updateAuthor(
    @Param('id') id: string,
    @Body() body: UpdateAuthorDto
  ): Promise<UpdateResult> {
    const author = await this.authorService.getAuthor(id);

    if (author === undefined) {
      throw new NotFoundException('Author not found!');
    }

    return this.authorService.update(id, body);
  }

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
  @Delete(':id')
  async deleteAuthor(@Param('id') id: string): Promise<DeleteResult> {
    return this.authorService.delete(id);
  }
}
