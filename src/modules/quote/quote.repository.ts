import { Logger } from '@nestjs/common';
import { EntityRepository, Repository, getConnection } from 'typeorm';

import { Quote } from '../../entities/Quote';

@EntityRepository(Quote)
export class QuoteRepository extends Repository<Quote> {
  private readonly logger = new Logger(Quote.name);

  async findByRandomOrder(): Promise<Quote[]> {
    try {
      return await getConnection().query(
        `select 
          q.id,
          q."content",
          row_to_json(a.*) as author,
          q."views",
          q.cover_img,
          q.created_at,
          q.updated_at
        from quotes q
        left outer join authors a on q.author_id = a.id
        where q."deleted"=false
        order by random() limit $1;`,
        [10]
      );
    } catch (err) {
      this.logger.error(err);
    }
  }
  async getQuoteById(id: string) {
    try {
      return this.findOne(
        { id, deleted: false },
        { relations: ['author', 'tags'] }
      );
    } catch (err) {
      this.logger.error(err);
    }
  }

  async paginate(page: number, limit: number): Promise<Quote[]> {
    try {
      const quotes = await this.find({
        where: { deleted: false },
        take: limit,
        skip: page
      });

      return quotes;
    } catch (err) {
      this.logger.error(err);
    }
  }

  async findByIdWithRelatedColmns(id: string): Promise<Quote> {
    try {
      const quote = await getConnection().query(
        `
        select
          q.id,
          q.author_id,
          q."content",
          q.cover_img,
          (
            select row_to_json(a.*) from authors a 
            where a.id = q.author_id limit 1
          ) as author,
          q."views",
          json_agg(t.*) as tags,
          q.created_at
        from quotes q 
          join quote_tag qt on qt.quote_id = q.id
          join tags t on t.id = qt.tag_id
        where q.id = $1
        group by q.id;
      `,
        [id]
      );
      return quote[0];
    } catch (err) {
      this.logger.error(err);
    }
  }
}
