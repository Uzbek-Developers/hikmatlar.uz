import { Author } from '../../../entities/Author';
export type AuthorsGroupByFirstChar = {
  char_group: string;
  authors: Author[];
};
