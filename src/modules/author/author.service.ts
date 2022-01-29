import { Injectable } from '@nestjs/common';

import { AuthorRepository } from './auhtor.repository';
import { Author } from '../../entities/Author';
import { AuthorsGroupByFirstChar } from './dto/AuthorsGroupByFirstChar';
import { CreateAuthorDto } from './dto/CreateAuthor';
import { UpdateAuthorDto } from './dto/UpdateAuthor';
import { UpdateResult } from 'typeorm';
@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}
  getLastAuthors(): Promise<Author[]> {
    return this.authorRepository.getLastAuthors();
  }
  GroupByFirstChar(): Promise<AuthorsGroupByFirstChar[]> {
    return this.authorRepository.getAuthorsGroupByFirstChar(10);
  }

  create(author: CreateAuthorDto): Promise<Author> {
    const authorModel = this.authorRepository.create(author);
    return this.authorRepository.save(authorModel);
  }

  update(id: number, author: UpdateAuthorDto): Promise<UpdateResult> {
    return this.authorRepository.update(id, {
      full_name: author.fullName,
      description: author.description
    });
  }
}
