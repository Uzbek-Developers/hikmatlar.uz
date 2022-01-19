import { Injectable } from '@nestjs/common';

import { AuthorRepository } from './auhtor.repository';
import { Author } from '../../entities/Author';

@Injectable()
export class AuthorService {
  constructor(private readonly authorRepository: AuthorRepository) {}
  getLastAuthors(): Promise<Author[]> {
    return this.authorRepository.getLastAuthors();
  }
}
