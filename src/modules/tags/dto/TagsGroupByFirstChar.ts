import { Tag } from '../../../entities/Tag';

export type TagsGroupByFirstChar = {
  char_group: string;
  tags: Tag[];
};
