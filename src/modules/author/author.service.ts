import { Injectable } from '@nestjs/common';

import { AuthorRepository } from './auhtor.repository';
import { Author } from '../../entities/Author';
import { AuthorsGroupByFirstChar } from './dto/AuthorsGroupByFirstChar';
import { CreateAuthorDto } from './dto/CreateAuthor';
import { DeleteResult } from 'typeorm';
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

  getAuthor(id: string): Promise<Author> {
    return this.authorRepository.findOne(id);
  }

  update(id: string, author: UpdateAuthorDto): Promise<UpdateResult> {
    const updateFileds = {};

    for (const key in author) {
      if (author[key] != undefined) {
        updateFileds[key] = author[key];
      }
    }

    return this.authorRepository.update(id, updateFileds);
  }

  delete(id: string): Promise<DeleteResult> {
    return this.authorRepository.delete(id);
  }
}
