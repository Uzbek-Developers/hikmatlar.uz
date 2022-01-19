import { Logger } from '@nestjs/common';
import { EntityRepository, Repository, getConnection } from 'typeorm';

import { Author } from '../../entities/Author';
import { AuthorsGroupByFirstChar } from './dto/AuthorsGroupByFirstChar';

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

  async getAuthorsGroupByFirstChar(
    limit: number
  ): Promise<AuthorsGroupByFirstChar> {
    try {
      return await getConnection().query(
        `select
        tg.alpha as char_group,
        json_agg(tg.*) as tags
        from (
          select 
          * from 
          (
            select 
              *,
              row_number() over (partition by t.alpha order by t.alpha) as rownum
            from (
              select *, SUBSTR(a."full_name", 1, 1) as alpha from authors a 
            ) t
          ) tmp
          where tmp.rownum <= $1
        ) as tg 
        group by tg.alpha`,
        [limit]
      );
    } catch (err) {
      this.logger.error(err);
    }
  }
}
