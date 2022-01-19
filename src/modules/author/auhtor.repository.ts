import { Logger } from '@nestjs/common';

import { EntityRepository, Repository } from 'typeorm';
import { Author } from '../../entities/Author';

@EntityRepository(Author)
export class AuthorRepository extends Repository<Author> {
  private readonly logger = new Logger(Author.name);

  async getLastAuthors(): Promise<Author[]> {
    try {
      return await this.find();
    } catch (err) {
      this.logger.error(err);
    }
  }
}
