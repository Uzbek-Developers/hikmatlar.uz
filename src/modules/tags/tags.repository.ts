import { Logger } from '@nestjs/common';
import { EntityRepository, Repository, getConnection } from 'typeorm';

import { Tag } from '../../entities/Tag';
import { TagsGroupByFirstChar } from './dto/TagsGroupByFirstChar';

@EntityRepository(Tag)
export class TagRepository extends Repository<Tag> {
  private readonly logger = new Logger(Tag.name);

  async getTagsGroupByFirstChar(
    limit: number
  ): Promise<TagsGroupByFirstChar[]> {
    try {
      return await getConnection().query(
        `select
        tg.alpha as char_group,
        json_agg(tg.*) as authors
        from (
          select 
          * from 
          (
            select 
              *,
              row_number() over (partition by t.alpha order by t.alpha) as rownum
            from (
              select *, SUBSTR(lower(t."full_name"), 1, 1) as alpha from tags a 
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
