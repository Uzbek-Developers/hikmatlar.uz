import { BadRequestException, Body, Controller, Post } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDTO } from './dto/CreateTeacher';

@Controller()
export class AuthorsController {
  constructor(private readonly authorService: AuthorService) {}

  @Post()
  async create(@Body() body: CreateAuthorDTO) {
    const author = await this.authorService.getAuthorByName(body.fullName);

    if (author) {
      throw new BadRequestException('This author is already exists!');
    }

    return this.authorService.createAuthor(body);
  }
}
