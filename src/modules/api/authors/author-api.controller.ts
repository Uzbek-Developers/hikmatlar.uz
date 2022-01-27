import { Post, Controller, Body } from '@nestjs/common';
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
}
