import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  NotFoundException,
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

  @Get(':id')
  async getAuthorById(@Param('id') id: string) {
    const author = await this.authorService.getAuthorById(id);

    if (author === undefined) {
      throw new NotFoundException('This author not found!');
    }

    return author;
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() body: UpdateAuthorDTO) {
    const author = await this.authorService.getAuthorById(id);

    if (author === undefined) {
      throw new NotFoundException('This author not found!');
    }

    return this.authorService.updateAuthor(id, body);
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const author = await this.authorService.getAuthorById(id);

    if (author === undefined) {
      throw new NotFoundException('This author not found!');
    }

    return this.authorService.deleteAuthor(id);
  }
}
