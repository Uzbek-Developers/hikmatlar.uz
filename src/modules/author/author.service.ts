import { Injectable } from '@nestjs/common';

import { AuthorRepository } from './auhtor.repository';
import { Author } from '../../entities/Author';
import { AuthorsGroupByFirstChar } from './dto/AuthorsGroupByFirstChar';
import { CreateAuthorDTO } from './dto/CreateTeacher';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}
  getLastAuthors(): Promise<Author[]> {
    return this.authorRepository.getLastAuthors();
  }
  GroupByFirstChar(): Promise<AuthorsGroupByFirstChar[]> {
    return this.authorRepository.getAuthorsGroupByFirstChar(10);
  }

  createAuthor(body: CreateAuthorDTO): Promise<Author> {
    const author = this.authorRepository.create({
      full_name: body.fullName,
      description: body.description
    });

    return this.authorRepository.save(author);
  }

  getAuthorByName(fullName: string): Promise<Author> {
    return this.authorRepository.findOne({ full_name: fullName });
  }
}
