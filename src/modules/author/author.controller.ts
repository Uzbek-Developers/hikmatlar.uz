import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put
} from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDTO } from './dto/CreateAuthor';
import { UpdateAuthorDTO } from './dto/UpdateAuthor';

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

  @Get()
  getAuthor() {
    return this.authorService.getAuthors();
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() body: UpdateAuthorDTO) {
    return this.authorService.updateAuthor(id, body);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.authorService.deleteAuthor(id);
  }
}
