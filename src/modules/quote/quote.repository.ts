import { Logger } from '@nestjs/common';
import { EntityRepository, Repository, getConnection } from 'typeorm';

import { Quote } from '../../entities/Quote';

@EntityRepository(Quote)
export class QuoteRepository extends Repository<Quote> {
  private readonly logger = new Logger(Quote.name);

  async findByRandomOrder(): Promise<Quote[]> {
    try {
      return await getConnection().query(
        'select * from quotes order by random() limit $1;',
        [10]
      );
    } catch (err) {
      this.logger.error(err);
    }
  }
}
